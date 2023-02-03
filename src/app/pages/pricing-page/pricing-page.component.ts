import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { PaymentDetails } from 'src/app/models/payments';
import { environment } from 'src/environments/environment';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServicePayment } from 'src/app/models/payments';




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
    private router: Router,


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
  paymentDetails = new PaymentDetails('50000', '', '', '');

  ngOnInit(): void {
    this.email =String(localStorage.getItem('email')) 
    this.page = 'one'
    this.getPricingDetails()
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
    if (ref.status == 'success') {
      this.paymentDetails.paymentStatus = ref.status;
      this.router.navigate(['/dashboard']);
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
    this.servicePayment.amount = data.fee;
    this.amount = data.fee
    console.log(data);
  }
  monthlyPaidPlan(){
    this.endpoint.processMonthlyPaidPlan(this.servicePayment).subscribe((data)=>{
      this.response = data
      if(this.response.reaponseCode == '00'){
        this.notifyService.showSuccess('Payment successful')
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }
  yearlyPaidPlan(){
    this.endpoint.processYearlyPaidPlan(this.servicePayment).subscribe((data)=>{
      this.response = data
      if(this.response.reaponseCode == '00'){
        this.notifyService.showSuccess('Payment successful')
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();})
  }
}

