import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvitationService } from 'src/app/service/invitation.service';
import { Chairs, Tables, CreateTableArrangements } from 'src/app/models/invitation';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



export interface PeriodicElement {
  table: string;
  invitee_info: string;

  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '3',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '7',  symbol: 'equal'},
];


@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent implements OnInit {


  newChairs = new Chairs(0,'','')
  newTables = new Tables('','',0,0,'',[])
  newCreateTableArrangements = new CreateTableArrangements([])
  edit: boolean = false;
  seatingTemplate = true;
  seatingTables = false;
  drawer: boolean = true;
  drawer_min: boolean = false;
  closeResult: string = "";
  response:any;
  page:any;
  invitationID:any
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['invitee_info', 'table', 'symbol'];
  table: any;



  constructor(
    private modalService: NgbModal,
    private iv: InvitationService,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    private http: HttpClient

  ) { }



  selectTableTemplate(content: any, pattern:any){
    this.modalService.open(content, { centered: true });
    this.newTables.pattern = pattern

  }

  open(content: any) {
    this.modalService.open(content, { centered: true });

  }
  ngOnInit(): void {
    this.page = 'invitations'
    this.getAllInvitations()
  }

  drag(event:CdkDragDrop<PeriodicElement[]>){
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.table.renderRows();
    }

  tableSettingsPage(ivId:any){
    this.page = 'tables'
    this.invitationID = ivId
    this.getTableArranagements()
  }

  tableArrangements:any;
  getTableArranagements(){
    this.endpoint.getTableArranagements(this.invitationID).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.tableArrangements = this.response.responseData;
        if(this.tableArrangements != 0){
          var recentLabel = this.tableArrangements[this.tableArrangements.length - 1].label;
          var recentLabelValue = recentLabel.split("T")[1];
          this.newTables.label = 'T' + (Number(recentLabelValue) + 1 );
        }else{

        }
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {      
      this.notify.showError(error.responseMsg);
      this.spinner.hide();
    })
  }

  allInvitations:any
  allTemplates:any[] = []
  getAllInvitations(){
    this.allTemplates = [];
    this.spinner.show();
    this.endpoint.getAllInvitations(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.allInvitations = this.response.responseData;
        if(this.allInvitations.length != 0){
          for( let item = 0; item < this.allInvitations.length; item++){
            // console.warn(this.allInvitations[item].templateUrl);
            this.endpoint.getRawHTMLFromURL(this.allInvitations[item].templateUrl).subscribe((data)=>{
              this.allTemplates.push(JSON.stringify(data))
            })
          }
          console.warn(this.allTemplates);

          
        }
      }else{
        this.notify.showWarning(this.response.responseData)
      }
    },(error) => {      
      this.notify.showError(error.responseMsg);
      this.spinner.hide();
    })
  }

  createTableArranagements(){
    this.spinner.show();
    this.newCreateTableArrangements.tables = []
    this.newTables.invitationId = 17;
    let caption = this.newTables.caption;
    let pattern = this.newTables.pattern;
    let chairQuatity = this.newTables.chairQuatity;
    let invitationId = this.newTables.invitationId;
    let label = this.newTables.label;
    let chairs = this.newTables.chairs;
    var table = new Tables(caption,pattern,chairQuatity,invitationId,label,chairs)
    this.newCreateTableArrangements.tables.push(table)    
    this.endpoint.createTableArranagements(this.newCreateTableArrangements).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notify.showSuccess(this.response.responseMsg)
        this.newTables.caption = ''
        this.newTables.chairQuatity = 0
        this.getAllInvitations();

      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {      
      this.notify.showError(error.responseMsg);
      this.spinner.hide();
    })
  }


  getNumberOfSeats(){
    this.newTables.chairs= []
    let tpattern = this.newTables.label
    let i = 1;
    while (i <= this.newTables.chairQuatity){
      let caption = tpattern
      let label = tpattern +'/C'+i
      var chairs = new Chairs(0,caption,label)
      this.newTables.chairs.push(chairs)
      i++
    }
  }

  onEditClick(e: any) {
    this.seatingTemplate = !this.seatingTemplate;
    this.seatingTables = !this.seatingTables
    console.log('working')
  }
  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

  Invitation(){
    this.iv.getIvPage('invitation')
  }
  ivList(){
    this.iv.getIvPage('ivList')
  }
  seatings(){
    this.iv.getIvPage('seating')
  }
  checkIn(){
    this.iv.getIvPage('checkIn')
  }


}

const httpOptions = {headers: new HttpHeaders({  "Access-Control-Allow-Origin" : "*" })};


