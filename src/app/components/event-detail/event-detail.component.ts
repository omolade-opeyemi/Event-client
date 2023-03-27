import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/service/notification.service';
import { Router } from '@angular/router';




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
    private route:Router,) { }

  ngOnInit(): void {
    this.getClientEventDetails()
  }

  response:any;

  openTicketting(content:any) {
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


}
