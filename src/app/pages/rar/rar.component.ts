import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


interface Invoice {
  solution: string;
  description: string;
  reqDate: string;

}

const INVOICES: Invoice[] = [
  {
    solution: "Physical Security",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Armed Guarding",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Surveilance",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Drone",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Armed Guarding",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  },
];

@Component({
  selector: 'app-rar',
  templateUrl: './rar.component.html',
  styleUrls: ['./rar.component.scss']
})
export class RarComponent implements OnInit {
  invoices = INVOICES;
  response:any;
  constructor(private endpoint:EndpointsService,
    private notify:NotificationService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.getSpecialRequests();
  }
  specialRequests:any
getSpecialRequests(){
  this.spinner.show();
  this.endpoint.getSpecialRequests(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
    this.response = data;
    this.spinner.hide();
    if(this.response.responseCode == '00'){
      this.specialRequests = this.response.responseData;
    }else{
      this.notify.showError(this.response.responseMsg)
    }
  },(error) => {
    this.notify.showError(error.message);
    this.spinner.hide();
  })
}
}
