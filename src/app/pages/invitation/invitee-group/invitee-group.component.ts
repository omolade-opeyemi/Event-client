import { Component, OnInit } from '@angular/core';
import { InvitationService } from 'src/app/service/invitation.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateInviteeGroup, AssignInviteesToGroup } from 'src/app/models/invitation';



@Component({
  selector: 'app-invitee-group',
  templateUrl: './invitee-group.component.html',
  styleUrls: ['./invitee-group.component.scss']
})
export class InviteeGroupComponent implements OnInit {

  response:any;
  closeResult: string = "";
  drawer: boolean = true;
  drawer_min: boolean = false;
  groupName : any = '';
  assignInviteesToGroup= new AssignInviteesToGroup([],0,0,0)
  createInviteGroup = new CreateInviteeGroup('','',0,0)
  constructor(
    private iv: InvitationService,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal


  ) { }

  ngOnInit(): void {
    this.getAllInvitees()
    this.getAllInviteeGroup()
  }


  selectedServices(data: any, item: any) {
    if (data.target.checked) {
      this.assignInviteesToGroup.inviteesId.push(item.id)
    }else{
      this.assignInviteesToGroup.inviteesId.splice(this.assignInviteesToGroup.inviteesId.indexOf(item), 1);

    }
  }

  inviteesToGroup(){
    this.assignInviteesToGroup.invitationId = 17;
    this.assignInviteesToGroup.profileId = Number(localStorage.getItem('profileId'))    
    this.endpoint.assignInviteesToGroup(this.assignInviteesToGroup).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.notify.showSuccess(this.response.responseMsg)
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }


  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

  allInviteeGroup:any
  getAllInviteeGroup(){
    this.spinner.show();
    this.endpoint.getAllInviteeGroup(17).subscribe((data)=>{
      this.response = data;
      this.spinner.hide()
      if(this.response.responseCode == "00"){
        this.allInviteeGroup = this.response.responseData
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }

  open(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }
  openInviteeList(invite:any, inviteeList:any) {
		this.modalService.open(inviteeList, { size: 'lg' , centered: true});
    this.assignInviteesToGroup.groupId = invite.groupId;
	}
  allInvitees:any
  getAllInvitess:any;
  getAllInvitees(){
    this.spinner.show();
    this.endpoint.getAllInvitees(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide()
      if(this.response.responseCode == '00'){
        this.getAllInvitess = this.response.responseData;        
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }

  createInviteeGroup(){
    this.createInviteGroup.profileId = Number(localStorage.getItem('profileId'));
    this.createInviteGroup.invitationId = 17;
    console.log(this.createInviteGroup);
    this.endpoint.createInviteeGroup(this.createInviteGroup).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.notify.showSuccess(this.response.responseMsg)
        this.getAllInviteeGroup();
      }else{
        this.notify.showWarning(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.errorMsg);
      this.spinner.hide();
    })
  }

  

}
