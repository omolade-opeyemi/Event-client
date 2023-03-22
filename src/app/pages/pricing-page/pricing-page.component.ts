import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { PaymentDetails } from 'src/app/models/payments';
import { environment } from 'src/environments/environment';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServicePayment } from 'src/app/models/payments';
import { InteractionService } from 'src/app/service/interaction.service';



export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  constructor(private endpoint: EndpointsService,
    private notifyService: NotificationService,
    private spinner: NgxSpinnerService,
    config: NgbModalConfig, private modalService: NgbModal,
    private route: Router,
    private interact: InteractionService


  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  reference = ''
  paymentStatus = '';
  email:any
  key = environment['paystackKey'];
  page = ''
  servicePayment = new ServicePayment(0,'','','','','',0,0)
  paymentDetails = new PaymentDetails('50000', '', '', '')
  plan:any
  planDuration:any

  ngOnInit(): void {
    this.email =String(localStorage.getItem('email')) 
    this.page = 'one'
    this.getPricingDetails();
    this.plan = localStorage.getItem('plan')
    this.planDuration = localStorage.getItem('duration')
  }

  back(){
    this.page = 'one'
  }

  paymentPage(content: any) {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.modalService.open(content);

  }
  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: { message: string, reference: string, status: string }) {
    this.paymentStatus = ref.status;
    // this.paymentDetails.paymentStatus = ref.status;
    // this.paymentDetails.transactionRef = ref.reference
    this.servicePayment.paymentReference = ref.reference;
    this.servicePayment.paymentGatewayResponseMessage = ref.message;
    this.servicePayment.paymentGatewayResponseCode = ref.status;
    this.servicePayment.email = this.email;
    this.servicePayment.transactionSource = 'web'
    
    if (ref.status == 'success') {
      if(this.durate == 'M'){
        this.monthlyPaidPlan()
      }
      else{
        this.yearlyPaidPlan()
      }
      this.notifyService.showSuccess('payment sucessful')
      this.modalService.dismissAll(ref);
    }
    else {
      this.notifyService.showError('Error in making payment')
    }
  }

  paymentCancel() {
    console.log('payment failed');
  }
  response: any
  pricingDetail: any
  getPricingDetails() {
    this.spinner.show();
    this.endpoint.getPricingDetails().subscribe((data) => {
      this.response = data
      this.spinner.hide();
      if (this.response.responseCode == '00') {
        this.pricingDetail = this.response.responseData
      }
      else {
        this.notifyService.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();
    })
  }

  filterd: any[] = []
  filter(data: any) {
    let filterObj = []
    filterObj = this.pricingDetail.filter((item: { duration: any; }) => item.duration == data)
    this.filterd = filterObj

  }
  detail: any
  amount:any
  choosePlan(data: any) {
    this.page = 'two'
    this.detail = data
    this.servicePayment.serviceId = data.serviceId;
    if(this.durate == 'M'){
      this.servicePayment.amount = data.monthlyFee + (data.monthlyFee * 0.075);
    this.amount = data.monthlyFee
    }else{
      this.servicePayment.amount = data.yearlyFee + (data.yearlyFee * 0.075);
    this.amount = data.yearlyFee;
    }
    
  }
  monthlyPaidPlan(){
    this.spinner.show();
    this.endpoint.processMonthlyPaidPlan(this.servicePayment).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess('Subscription successful');
        this.route.navigate(['/dashboard']);
      }
      else{
        this.notifyService.showError('Error message')
      }
    }, (error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }
  yearlyPaidPlan(){
    this.spinner.show();
    this.endpoint.processYearlyPaidPlan(this.servicePayment).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess('Subscription successful');
        this.route.navigate(['/dashboard']);
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }
  processFreePlan(){
    this.servicePayment.email = this.email;

    this.endpoint.processFreePlan({email:this.servicePayment.email,
    serviceId: this.servicePayment.serviceId}).subscribe((data)=>{
      this.response = data
      if(this.response.responseCode == '00'){
        this.notifyService.showSuccess('Subscription successful');
        this.route.navigate(['/dashboard']);
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }
  durate = 'M'
  duration(data:any){
    this.durate = data;    
  }
}

