import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  selected: Date | null | undefined;
  constructor(private endpoint:EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private interact: InteractionService,
    private router: Router,

    ) { }

  response:any;
  getActive:any;
  isActive:boolean=false
  ngOnInit(): void {
    this.getActivePlan()
    this.getCreatorDashboard()
  }

  getActivePlan(){
    this.spinner.show()
    this.endpoint.getActivePlan(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.isActive = true;
        this.getActive = this.response.responseData;
        localStorage.setItem('plan',this.getActive.plan);
        localStorage.setItem('duration',this.getActive.planDurationType)
        this.interact.getPlan(String(localStorage.setItem('plan',this.getActive.plan)))
      }
      else{
        this.isActive = false;
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();
    })
  }

  getSingleEvent(data:any){
    // var event = this.eventOverview.filter((item)=>item.eventId == data);
    localStorage.setItem('eventId',data)
    this.router.navigate(['/plan-budget'])
  }

  addTicket(data:any){
    localStorage.setItem('eventId',data);
    this.router.navigate(['/ticket'])
  }

  eventOverview:any[]=[]
  creatorDashboard:any;
  getCreatorDashboard(){
    this.spinner.show()
    this.endpoint.getCreatorDashboard(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response=data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.creatorDashboard = this.response.responseData;
        this.eventOverview = this.creatorDashboard.eventOverviews;
      }
      else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();
    })
  }

  openLg(content: any) {
    if(this.isActive == true){
      this.router.navigate(['/create-event']);
    }
    else{
      this.modalService.open(content, { size: 'lg' , centered: true});
    }
	}

  subscribe(){
    this.router.navigate(['/pricing']);
    this.modalService.dismissAll()

  }
}
// filterObj = this.supplerData.filter((item) => item.serviceCategory.includes(data) || item.serviceType.includes(data));
