import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardPayment, WalletPayment, } from 'src/app/models/payments';



interface Invoice {
  invoiceId: string;
  description: string;
  invoiceDate: string;
  dueDate: string;
  status: string;
  amount: number;
}

const INVOICES: Invoice[] = [
  {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  },
];
@Component({
  selector: 'app-ipr',
  templateUrl: './ipr.component.html',
  styleUrls: ['./ipr.component.scss']
})
export class IprComponent implements OnInit {
  invoices = INVOICES;
  response:any;
  eml:any;
  key = environment['paystackKey'];
  paymentWallet = new WalletPayment(0,0,[],'',0,0,'',0,0)
  // contract = new ContractService('',0,0,'',0,0)
  paymentCard = new CardPayment(0,0,0,0,0,'','')

  constructor(
    private endpoint:EndpointsService,
    private notify:NotificationService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,

  ) { }

  
  ngOnInit(): void {
    this.eml=localStorage.getItem('email')
    this.getInvoiceForSpecialRequst();
  }

  invoicesSpecial:any
  getInvoiceForSpecialRequst(){
    this.spinner.show();
    this.endpoint.getInvoicesForSpecialRequests(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.invoicesSpecial = this.response.responseData;
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

  invoiceDetail:any
  amt:any;
  getInvoiceDetailForSpecialRequest(modal:any, invoice:any){
    this.paymentCard.contractId = invoice.contractId;
    this.paymentCard.eventId = invoice.eventId;
    this.paymentCard.invoiceId = invoice.id;
    this.paymentWallet.contractServices.push(invoice.contractService)
    this.endpoint.getInvoiceDetailForSpecialRequest(Number(localStorage.getItem('profileId')),
    invoice.id).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.invoiceDetail = this.response.responseData;
        this.amt=this.invoiceDetail.total;
        this.paymentCard.amount = this.amt;
        this.modalService.open(modal, { size: 'xl' });

      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }
  paymentOption:any
  reference = ''

  paymentOptions(option:any){
    this.paymentOption = ''
    this.modalService.open(option);
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }


  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any, content:any) {
    this.paymentCard.trxRef = ref.trxref;
    if(ref.status == 'success'){
      this.paymentCard.paymentGatewayResponseCode = '00';
    }
    this.specialRequestCardPayment();
    this.modalService.dismissAll()    
  }

  paymentCancel() {
    console.log('payment failed');
  }

  specialRequestCardPayment(){
    this.spinner.show();
    this.paymentCard.profileId = Number(localStorage.getItem('profileId'))
    this.endpoint.specialRequestCardPayment(this.paymentCard).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notify.showSuccess('Payment suceefull')
        this.getInvoiceForSpecialRequst()

      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }
  specialRequestWalletPayment(){
    this.paymentWallet.profileId = Number(localStorage.getItem('profileId'))
    this.paymentWallet.contractId = this.paymentCard.contractId
    this.paymentWallet.eventId = this.paymentCard.eventId
    this.paymentWallet.caption = 'cool'
    this.paymentWallet.invoiceValue = this.amt;
    this.paymentWallet.transactionSource = 'web'
    this.paymentWallet.value = this.amt;
    this.paymentWallet.vat = 0
    this.spinner.show();
    this.endpoint.specialRequestWalletPayment(this.paymentWallet).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notify.showSuccess('Payment Successfull')
        this.modalService.dismissAll()    
      }else{
        this.notify.showError(this.response.responseMsg)
        this.modalService.dismissAll()    
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.modalService.dismissAll()    
      this.spinner.hide();
    })
  }
  
}
