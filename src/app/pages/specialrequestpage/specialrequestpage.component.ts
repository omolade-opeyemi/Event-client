import { Component, OnInit } from '@angular/core';
import { SpecialRequestService } from 'src/app/service/special-request.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { EventInformation, CreateSpecial, SpecialRequestDetail } from 'src/app/models/service';



@Component({
  selector: 'app-specialrequestpage',
  templateUrl: './specialrequestpage.component.html',
  styleUrls: ['./specialrequestpage.component.scss'],
})
export class SpecialrequestpageComponent implements OnInit {

  constructor(private interaction: SpecialRequestService,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    ) { }

page:string=''
response: any;
pg:number = 1;
totalLength: any;
createSpecial = new CreateSpecial(0,0,[])
specialRequestDetail = new SpecialRequestDetail(0,0)
eventInfo = new EventInformation('','','','','','','','')




  ngOnInit(): void {
    this.interaction.requestBack$.subscribe(message => {this.page = message})
    this.page = 'home'
    this.getSpecialRequestServices()
  }
  backHome(){
    this.page = 'home'
    this.interaction.getrequestHead('main')
  }
  psecurity(){
    this.page = 'security'
    this.interaction.getrequestHead('non')
  }

  serviceName: any=''
  selectService(data:any){
    this.specialRequestDetail.serviceId = data.serviceId;
    this.serviceName = data.serviceName
    this.page = 'security'
    this.interaction.getrequestHead('non')
    this.getCreatorEventsForRequest()
  }
  
  rar(){
    this.page = 'rar'
    this.interaction.getrequestHead('rar')

  }
  ipr(){
    this.page = 'ipr'
    this.interaction.getrequestHead('ipr')
  }
  bookAservice(){
    this.page = 'requests'
  }
  // Number(localStorage.getItem('eventId'))
  specialRequest:any;
  getSpecialRequestServices(){
    this.spinner.show();
    this.endpoint.getSpecialRequestServices(45).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.specialRequest = this.response.responseData;
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

  filterd:any
  selectEvents(data:any){
    let filterObj =  []
    filterObj = this.creatorEvent.filter((item) => item.eventId == data);
    this.filterd = filterObj;
    console.log(this.filterd);
    this.createSpecial.eventId= this.filterd[0].eventId;
    this.eventInfo.startDate = (this.filterd[0].startDate.split('T'))[0];    
    this.eventInfo.endDate = (this.filterd[0].endDate.split('T'))[0];
    this.eventInfo.startTime = (this.filterd[0].startDate.split('T'))[1];
    this.eventInfo.endTime = (this.filterd[0].endDate.split('T'))[1];
    this.eventInfo.state = this.filterd[0].state;
    this.eventInfo.lga = this.filterd[0].lga;
    this.eventInfo.street = this.filterd[0].street;
  }

  creatorEvent:any[]=[]
  getCreatorEventsForRequest(){
    this.spinner.show();
    this.endpoint.getCreatorEventsForRequest(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response =data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.creatorEvent = this.response.responseData;
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

  createEventSpecialRequest(){
    this.createSpecial.specialServiceReqDetail = [];
    this.createSpecial.profileId = Number(localStorage.getItem('profileId'));
    this.createSpecial.specialServiceReqDetail.push(this.specialRequestDetail);    
    this.spinner.show();
    this.endpoint.createEventSpecialRequest(this.createSpecial).subscribe((data)=>{
      this.response = data;
      this.spinner.hide()
      if(this.response.responseCode == '00'){
        this.notify.showSuccess('Request sent successful')
        this.backHome()
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

}
