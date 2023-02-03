import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventCreation, EventDateDtos, EventLocationDtos, Events, EventTickets, EventUrls } from 'src/app/models/events';
import { FileStorageService } from 'src/app/service/filestorage.service';
import { NotificationService } from 'src/app/service/notification.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { Router } from '@angular/router';



interface Country {
  index: string;
  ticket_Name: string;
  ticket_Quantity: string;
  ticket_Price: number;
  status: string;
  salesEnd: string;
  more: string;
}

const COUNTRIES: Country[] = [
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
];



@Component({
  selector: 'app-createeventpage',
  templateUrl: './createeventpage.component.html',
  styleUrls: ['./createeventpage.component.scss']
})
export class CreateeventpageComponent implements OnInit {
  
  page:string=''
  events = new Events(0,'','','','','',0,0,true,'');
  eventsUrls = new EventUrls('','');
  eventURLS : EventUrls[] = []
  eventLocationDtos = new EventLocationDtos(0,0,'','');
  eventLocationDTOS : EventLocationDtos[] = []
  eventsDateDtos = new EventDateDtos('','','','');
  eventsDateDTOS : EventDateDtos[] = []
  eventSupplierIds : number[] = []
  eventTickets = new EventTickets(true,'',0,0,'','','','','')
  eventTICKETS : EventTickets[] = []
  eventCreation = new EventCreation(this.events,
    this.eventSupplierIds,this.eventURLS,
    this.eventLocationDTOS,this.eventsDateDTOS,
    this.eventTICKETS)

    response:any
    states:any=[];
    lga:any = [];


  countries = COUNTRIES;
  constructor(
    private modalService: NgbModal,
    private fileStorageService: FileStorageService,
    private spinner: NgxSpinnerService,
    private notifyService: NotificationService,
    private endpoint: EndpointsService,
    private route:Router,
    ) { }

  ngOnInit(): void {
    this.page = 'one'
    this.events.profileId = Number(localStorage.getItem('profileId'))
    this.getEventCategories();
    this.getStates();
  }

  singleEvent= null
  getTypes(value:any){
    this.events.category =  value.split(',')[1]

  }
  statelga =null
  getStates(){
    this.endpoint.getStates().subscribe((data)=>{
      this.response = data;
      if (this.response.responseCode == '00'){
        this.states=this.response.responseData;
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
    })
  }
  getlga(value: any) {
    this.eventLocationDtos.state = value.split(',')[1];
    this.eventLocationDtos.stateId = value.split(',')[0];
    this.endpoint.getLga(value.split(',')[0]).subscribe(data => {
      this.response = data;  
        this.lga= this.response.responseData })
  }
  eventCategories:any
  getEventCategories(){
    this.endpoint.getEventCategories().subscribe((data)=>{
      this.response = data;
      if( this.response.responseCode == '00'){
        this.eventCategories = this.response.responseData;
      }
      else{
        this.notifyService.showSuccess(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }

  eventTypes:any
  getEventTypes(value:any){
    this.events.category =  value.split(',')[1]
    this.endpoint.getEventTypes(value.split(',')[0]).subscribe((data)=>{
      this.response = data;
      console.log(data);
      
      if( this.response.responseCode == '00'){
        this.eventTypes = this.response.responseData
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }

  publishEvent(){
    this.continue()
    this.endpoint.publishNewEvent(this.eventCreation).subscribe((data)=>{
      this.response = data
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess('Event publish successful')
        this.route.navigate(["/dashboard"])
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }
  draftEvent(){
    this.continue()
    this.endpoint.draftNewEvent(this.eventCreation).subscribe((data)=>{
      this.response = data
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess('Event draft successful')
        this.route.navigate(["/dashboard"])
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }
  createTicket(){
    var obj = this.eventTickets
    this.eventTICKETS.push(obj)
    console.log(this.eventTICKETS);
    this.modalService.dismissAll()
    this.page = 'twoo'
  }
  openLg(content:any) {
		this.modalService.open(content, { size: 'lg' });
	}
  eventDetail(){
    this.page='one'
  }
  tickets(){
    this.page= 'two'
    if( this.eventURLS.length != 0){
      this.page= 'twoo'
    }
    
  }
  review(){
    this.
    page = 'three'
  }

  continue(){
    this.profileImageUpload()
    this.events.profileId=Number(Number(localStorage.getItem('profileId')))
    this.events.datePublished = this.eventsDateDtos.eventStartDate +'T00:00:00'
    this.eventsDateDTOS.push(this.eventsDateDtos);
    this.eventSupplierIds.push(Number(localStorage.getItem('profileId')));
    this.eventLocationDTOS.push(this.eventLocationDtos);
    // this.eventURLS.push(this.eventsUrls)
    console.log(this.eventCreation);
    
  }

  fileUrl: string = '';
  file: string[] = [];
  files: File[] = [];
  profileImgeFile: any;

  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);  
  }
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  profileImageUpload() {
    var profileImgeFile:any
    for (let i = 0; i < this.files.length; i++) {
      profileImgeFile = this.files[i];
      this.imageUpload(profileImgeFile);
    }
    var proof:EventUrls = new EventUrls(this.eventsUrls.mobileBannerUrl, this.eventsUrls.websiteBannerUrl)
    this.eventURLS.push(proof);
  }
  imageUpload(selectedfile: any) {
    this.spinner.show();
    this.file = []
    this.fileStorageService.UploadFileFromDataUrl(selectedfile);
    this.fileStorageService.onUploadFinished.subscribe(
      (resp: any) => {
        this.spinner.hide();
        if (resp.responseCode != "00") {
          this.notifyService.showError('System error, A system error has occured');
        }
        else {
          this.fileUrl = resp.responseData;
          this.file.push(this.fileUrl);
          this.eventsUrls.websiteBannerUrl = this.fileUrl
        }
      }, (error) => {
        this.spinner.hide();
        this.notifyService.showError(error.error.responseMsg);
      }
    )
  }

}
