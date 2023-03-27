import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
// import { PaystackOptions } from 'angular4-paystack';
import { ServicePayment } from 'src/app/models/payments';
import { PaymentDetails } from 'src/app/models/payments';
import { environment } from 'src/environments/environment';
import { LoadWallet } from 'src/app/models/payments';


interface data {
  platform: string;
  platformImg: string;
  description: string;
  status: string;
  date:string;
  amount:number;
  transactionType:string;

}
const DATA: data[] = [
  {
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  }
   
]
@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class WalletDashboardComponent implements OnInit {

  
  constructor(config: NgbModalConfig,
     private modalService: NgbModal,
     private endpoint:EndpointsService,
     private notify:NotificationService,
     private spinner: NgxSpinnerService,
     ){ config.backdrop = 'static';
     config.keyboard = false;}

servicePayment = new ServicePayment(0,'','','','','',0,0);
paymentDetails = new PaymentDetails('50000', '', '', '');
loadWallet = new LoadWallet(0,0,'','')


    
  pg: number = 1;
  paginate = 4;
  totalLength: any;
  response:any;
  email:any;

  

  ngOnInit(): void {
    this.email=localStorage.getItem('email');
    this.getWalletHistory();


  }

  reference = ''
  paymentStatus = '';
  key = environment['paystackKey'];
  paymentPage(content: any) {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.modalService.open(content);
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any, content:any) {
    // this.closeModal(content);
    this.modalService.dismissAll();
    if(ref.status == 'success')
    this.endpoint.postTransactions(
      {
        "profileId": localStorage.getItem('profileId'),
        "paymentGateway": "paystack",
        "paymentReferenceInternal": "",
        "paymentReferenceGateway": ref.reference,
        "sessionId": "",
        "paymentGatewayResponseCode": "00",
        "paymentGatewayResponseDescription": ref.status,
        "value": this.loadWallet.amount,
        "vat": 7.5,
        "transactionType": "Wallet Top Up",
        "contractId": 0,
        "transactionSource":"Secure Mobility Web",
        "paymentConfirmed":true,
      }
    ).subscribe((data)=>{
      this.loadUp()
    },
    (error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    });
  }

  paymentCancel() {
    console.log('payment failed');
  }

  loginResponseMsg:any;
  loadUp(){
    this.spinner.show();
    this.loadWallet.profileId = Number(localStorage.getItem('profileId'));
    this.loadWallet.platform = 'event';
    this.loadWallet.transactionSource = 'web';
    this.endpoint.loadWallet(this.loadWallet).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
    if(this.response.responseCode != '00'){
      this.notify.showError(this.response.responseMsg)
    }else{
      this.getWalletHistory(),
      this.getWalletBallance(),
      this.notify.showSuccess(this.response.responseMsg)
    }
  },(error) => {
    this.notify.showError(error.errorMsg);
    this.spinner.hide();
  })
  }
  walletHistory:any;
  percent:any;
  balance:any;
  getWalletHistory(){
    this.spinner.show();
    this.endpoint.getWalletHistory(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.walletHistory = this.response.responseData;
        this.percent = this.walletHistory.balancePercentage;
        this.balance = this.walletHistory.balance;
      }   
      else if(this.response.responseCode == '01'){
        this.notify.showInfo(this.response.responseMsg);
        this.walletHistory = null
        this.percent = 100;
        this.balance = 0;
      }
 
      else{
        this.walletHistory = null
        this.percent = 100;
        this.balance = 0;
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();
    })
  }
  walletBallance:any
  getWalletBallance(){
    this.endpoint.getWalletBallance(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.walletBallance=this.response.responseData
      }else{
        this.notify.showError(this.response.responseMsg)
      }
  },(error) => {
    this.notify.showError(error.message);
  });
  }

  getWalletResponseTransactionHistory = DATA ;
  openVerticallyCentered(){
    console.warn('modal');
  }

  openMore(more:any) {
		this.modalService.open(more);
	}
  progressBar:any; 
progrssBarr(){
this.progressBar= document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressValue = 0;
let progressEndValue = 80;
let speed = 10;

let progress = setInterval(() => {
	progressValue++;
	// valueContainer.textContent = `${progressValue}%`;
	this.progressBar.style.background=`conic-gradient(
	#52CEB8 ${progressValue * 3.6}deg,
	#007AFF ${progressValue * 3.6}deg
	)`
	if (progressValue == progressEndValue){
		clearInterval(progress)
	}
},speed)
}

}
