import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/service/notification.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private route:Router,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.getAllEvents()
    
  }

  response:any;
  eventDetail(eventId:any){
    localStorage.setItem('eventId',eventId)
    this.route.navigate(['/event-detail'])
  }
  allEvents:any
  getAllEvents(){
    this.spinner.show();
    this.endpoint.getAllEvents().subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.allEvents = this.response.responseData;
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
