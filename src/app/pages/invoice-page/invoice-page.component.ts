import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { InteractionService } from 'src/app/service/interaction.service';
import { CreatorPayment } from 'src/app/models/payments';
import { SafeHtmlPipe } from 'ngx-spinner/lib/safe-html.pipe';
import { DomSanitizer } from "@angular/platform-browser";




interface Invoice {
  invoiceid: string;
  description: string;
  invoicedate: string;
  duedate: string;
  status: string;
  amount: string;
  image: string;

}

const INVOICES: Invoice[] = [
  {
    invoiceid: "Physical Security",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoicedate: "Sept 26, 2022",
    duedate: "Sept 26, 2022",
    status : "Done",
    amount: "40000",
    image: ''

  },{
    invoiceid: "Physical Security",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoicedate: "Sept 26, 2022",
    duedate: "Sept 26, 2022",
    status : "Done",
    amount: "40000",
    image: ''
  }, {
    invoiceid: "Physical Security",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoicedate: "Sept 26, 2022",
    duedate: "Sept 26, 2022",
    status : "Pending",
    amount: "40000",
    image: ''

  }, 
];

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent implements OnInit {

  constructor(    private modalService: NgbModal,
    private endpoint: EndpointsService,
    private notifyService: NotificationService,
    private spinner: NgxSpinnerService,
    private interact:InteractionService,
    private sanitizer: DomSanitizer
    ) { }
  invoices = INVOICES;
  response:any;
  page:any;
  payment= new CreatorPayment(0,0,0,0)

 window = window;


  ngOnInit(): void {
    this.page = 'invoice'
    this.interact.invoice$.subscribe(message => {this.page = message});
    this.getCreatorInvoices(Number(localStorage.getItem('profileId')))
  }

  checkOut(){
    this.interact.getInvoice('preview')
  }

  paymentOption(content:any){
    this.modalService.open(content);
  }

  url:any;
  paymentData:any
  creatorPayment(payment:any){
    this.endpoint.creatorPayment(this.payment).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.paymentData = this.response.responseData;
        this.url =this.paymentData.data.authorization_url;        
        this.openModal(payment)

      }else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url
    );
  }
  openModal(data:any) {
    this.modalService.dismissAll();
    this.modalService.open(data)
  }


  invoiceDetail:any
  invoiceId:any
  viewInvoice(review:any, invoiceId:number, eventId:number){
    this.spinner.show();
    this.invoiceId = invoiceId;
    this.endpoint.getCreatorInvoiceDetails(Number(localStorage.getItem('profileId')),invoiceId).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.invoiceDetail = this.response.responseData
        this.modalService.open(review, { size: 'xl' });
        this.payment.amount = this.invoiceDetail.total;
        this.payment.eventId = eventId;
        this.payment.invoiceId = invoiceId;
        this.payment.profileId = Number(localStorage.getItem('profileId'))
      }else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }

  creatorInvoice:any;
  getCreatorInvoices(data:any){
    this.spinner.show();
    this.endpoint.getCreatorInvoices(data).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.creatorInvoice = this.response.responseData;
      }else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }

  closeButton(){
    this.page = 'invoice'
    this.getCreatorInvoices(Number(localStorage.getItem('profileId')))
  }

  
 


}
