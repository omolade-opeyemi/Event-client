import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvitationService } from 'src/app/service/invitation.service';
import { AddSingleInvitee } from 'src/app/models/invitation';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';




interface Invites {
  name: string;
  email: string;
  guests: number;
  date: string;
  status: string;

}
const INVITES: Invites[] = [
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Pending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Attending"

  },
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Attending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Not Attending"

  },
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Pending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Pending"

  },

];

@Component({
  selector: 'app-invitee',
  templateUrl: './invitee.component.html',
  styleUrls: ['./invitee.component.scss']
})
export class InviteeComponent implements OnInit {

  response:any;
  invites = INVITES;
  closeResult: string = "";
  drawer: boolean = true;
  drawer_min: boolean = false;
  addSingleInvitee = new AddSingleInvitee('','','','','','')
  constructor(private modalService: NgbModal,
    private iv: InvitationService,
    private endpoint: EndpointsService,
    private notify:NotificationService,
    private spinner: NgxSpinnerService,
    ) { }
  open(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }
  ngOnInit(): void {
    this.getAllInvitees()
  }

  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

  
  allInvitees:any
  getAllInvitess:any;
  getAllInvitees(){
    this.spinner.show();
    this.endpoint.getAllInvitees(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide()
      if(this.response.responseCode == '00'){
        this.getAllInvitess = this.response.responseData;        
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }

  singleInvitee(){
    this.spinner.show();
    this.endpoint.AddSingleInvite(this.addSingleInvitee).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notify.showSuccess(this.response.responseMsg);
        this.getAllInvitees()
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }
}
