import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/service/notification.service';
import { Router } from '@angular/router';
import { PaymentForTicket, Ticket, FreeTicket } from 'src/app/models/payments';
import { DomSanitizer } from "@angular/platform-browser";



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;
  constructor(private modalService: NgbModal,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,

    private route:Router,) { }

    ticketFree = new FreeTicket('','','','','',0,'',0,0)
    ticketPayment = new PaymentForTicket('','','','','',[],0,'','',0);
    singleTicket = new Ticket(0,'',0,0,0);
    qty = 0

  ngOnInit(): void {
    this.getClientEventDetails()
  }

  response:any;

  openTicketting(content:any) {
    this.eventTicket = [];
		this.modalService.open(content, { size: 'xl' });
	}
  openCheckout(content:any){
    this.modalService.dismissAll()
    this.modalService.open(content, { size: 'xl' });
  }

  eventDetails:any;
  getClientEventDetails(){
    this.spinner.show();
    this.endpoint.getClientEventDetails(Number(localStorage.getItem('eventId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.eventDetails = this.response.responseData;
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide();
    })
  }

  fee: any=0;
  subtotall:any=0
  eventTicket:any[]=[]
  getTicketDetails(data:any, index:any, ticket:any){
    var subtotal: number = 0
    let ticketId = ticket.ticketId;
    let ticketName = ticket.ticketName;
    let unitPrice = ticket.price;
    let quantity = data.target.value;
    let totalPrice = unitPrice * quantity;
    if(data.target.value > 0){
   var tickets: Ticket = new Ticket(ticketId,ticketName,unitPrice,quantity,totalPrice);
   this.eventTicket = this.eventTicket.filter((item)=> item.ticketId != ticketId)
   this.eventTicket.push(tickets)
    }else if(data.target.value <= 0){
      this.eventTicket = this.eventTicket.filter((item)=> item.ticketId != ticketId)
    }
    for (let x=0; x < this.eventTicket.length; x++){
      subtotal += Number(this.eventTicket[x].totalPrice);
    }
    this.subtotall = subtotal;
    this.commission(subtotal)
  }

  total:any = 0;
  commission(data:any){
    var fee = 0
    var commission = 0.1 * data;  // halogen's commission
            var amountWithCommission = data + commission;
            var amountWithCommissionAndCharge = amountWithCommission * 1.0205; //1.0205 appr. derivation of halogen charge

            if ((amountWithCommission + 2000) > amountWithCommissionAndCharge)
            {
                amountWithCommissionAndCharge = amountWithCommission + 2000;
            }
            var totalAmount = amountWithCommissionAndCharge;
            fee = totalAmount - data;
            this.fee = fee;
            this.total = totalAmount
            this.ticketPayment.totalAmount = data;
  }

  url:any;
  paymentData:any
  customerPaymentForTicket(payment:any){
    this.ticketPayment.eventId = this.eventDetails.eventId;
    this.ticketPayment.ticketPayments = this.eventTicket;
    this.ticketPayment.paymentGateway = 'Paystack';
    this.endpoint.customerPaymentForTicket(this.ticketPayment).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.paymentData = this.response.responseData;
        this.url =this.paymentData.item2;        
        this.openModal(payment)

      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();})
  }
  openModal(data:any) {
    this.modalService.dismissAll();
    this.modalService.open(data)
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url
    );
  }
  
  // closeButton(){
  //   this.page = 'invoice'
  //   this.getCreatorInvoices(Number(localStorage.getItem('profileId')))
  // }

  customerRegsiterForFreeTicket(){
    this.ticketFree.email = this.ticketPayment.email;
    this.ticketFree.firstName = this.ticketPayment.firstName;
    this.ticketFree.lastName = this.ticketPayment.lastName;
    this.ticketFree.gender = this.ticketPayment.gender;
    this.ticketFree.phoneNumber = this.ticketPayment.phoneNumber;
    this.ticketFree.eventId = this.ticketPayment.eventId;
    this.ticketFree.ticketId = this.ticketPayment.ticketPayments[0].ticketId;
    this.ticketFree.ticketName = this.ticketPayment.ticketPayments[0].ticketName;
    this.ticketFree.quantity = this.ticketPayment.ticketPayments[0].quantity
    this.endpoint.customerRegsiterForFreeTicket(this.ticketPayment).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.notify.showSuccess(this.response.responseMsg)
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();})
  }

}
