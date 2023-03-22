import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/service/notification.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { Router } from '@angular/router';
import { EventCreation, EventDateDtos, EventLocationDtos, Events, EventTickets, EventUrls, CreateNewTicket } from 'src/app/models/events';


export interface PeriodicElement {
  serial: string;
  name: string;
  ticketName: string;
  weight: number;
  symbol: string;
  end: string;
  more: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { serial: "=", ticketName: "General Admission", name: '15/20', weight: 5000, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '0/50', weight: 15000, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '5/10', weight: 7500, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '10/10', weight: 9000, symbol: '🔴 Sold Out', end: "Sep 26, 2022 at 7:00pm", more: "" },

];


@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {

  eventTickets = new EventTickets(true,'',0,0,'','','','','');
  newTicket = new CreateNewTicket(0,0,0,0,'','','','','','','','')
  response:any;


  constructor(
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private notifyService: NotificationService,
    private endpoint: EndpointsService,
    private route:Router,
  ) { }

  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.getEventDetail();
    this.paid();
  }

  eventDetail:any;
  getEventDetail(){
    this.spinner.show();
    this.endpoint.getEventDetail(Number(localStorage.getItem('eventId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.eventDetail = this.response.responseData;
      }else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }
  createTicket(){
    this.newTicket.profileId = Number(localStorage.getItem('profileId'));
    this.newTicket.eventId = Number(localStorage.getItem('eventId'));
    // this.newTicket.eventEndDate = this.newTicket.eventEndDate +'T00:00:00';
    // this.newTicket.eventStartDate = this.newTicket.eventStartDate +'T00:00:00';
    console.log(JSON.stringify(this.newTicket));
    this.spinner.show();
    this.endpoint.createNewTicket(this.newTicket).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess(this.response.responseMsg);
        this.getEventDetail();
      }else{
        this.notifyService.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notifyService.showError(error.errorMsg);
      this.spinner.hide();
    })
    this.modalService.dismissAll();
  }
  paid(){
    this.newTicket.ticketType = 'paid'
    this.newTicket.ticketPrice = ''

    }
    free(){
      this.newTicket.ticketType = 'free'
      this.newTicket.ticketPrice = 'free'
    }
    openLg(content:any) {
      this.modalService.open(content, { size: 'lg' });
    }


}
