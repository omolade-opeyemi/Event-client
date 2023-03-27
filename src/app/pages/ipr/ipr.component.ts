import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


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
  constructor(
    private endpoint:EndpointsService,
    private notify:NotificationService,
    private spinner: NgxSpinnerService,

  ) { }

  
  ngOnInit(): void {
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
}
