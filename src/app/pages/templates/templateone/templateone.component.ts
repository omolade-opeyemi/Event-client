import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { CreateInvitation } from 'src/app/models/invitation';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { InvitationService } from 'src/app/service/invitation.service';


@Component({
  selector: 'app-templateone',
  templateUrl: './templateone.component.html',
  styleUrls: ['./templateone.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
		`
			.my-custom-class {
				background: aliceblue;
				font-size: 125%;
        width: 50vw;
			}
			.my-custom-class .arrow::after {
				border-top-color: aliceblue;
			}
		`,
	],
})
export class TemplateoneComponent implements OnInit {

  createInvitation = new CreateInvitation('','',0,'','','')
  response:any
  valueOne:any;
  youAre:string = 'you are cordially invited to'
  and:string = '&'
  text1:string = "DINNER"
  text2:string = "DRINKS"
  inviter_invite:string = " HB Enterprise is celebrating it's tenth year"
  date:string = "Saturday, May 6th"
  time:string = "at 6:30pm"
  address:string = "1234, Waywardlane Lane, San Diego, CA 92222"
  rsvp:string = "Please RSVP"
  selectedTemplate: any;

  constructor(
    private endpoint:EndpointsService,
    private notify:NotificationService,
     private spinner: NgxSpinnerService,
     private iv: InvitationService,

     
  ) { 
    
  }

  ngOnInit(): void {
    this.valueTwo = 'Marriana'
    this.iv.SelectedTemplate$.subscribe(message => {
      this.selectedTemplate = message
    });
    this.iv.captionLabel$.subscribe(message => {
      if(message.length != 0 && this.selectedTemplate == '1'){
        this.createInvite(message)
      }
      }) 

   
       

  }

  valueTwo = 'Marriana';
  valueThree = 'Marriana';
  valueFour = '25 | 04 | 2024'

createInvite(data:string[]){
  // this.spinner.show();
  this.createInvitation.Caption= data[0];
  this.createInvitation.Description = data[1];
  var invitation = [{id: 1, caption:this.youAre},
  {id: 2, caption:this.text1},
  {id: 3, caption:this.and},
  {id: 4, caption:this.text2},
  {id: 5, caption:this.inviter_invite},
  {id: 6, caption:this.date},
  {id: 7, caption:this.time},
  {id: 8, caption:this.address},
  {id: 9, caption:this.rsvp}]
  this.createInvitation.FormData = JSON.stringify( invitation);
  this.createInvitation.ProfileId = Number(localStorage.getItem('profileId'));
  this.createInvitation.InvitationTemplateCode = 'fgty'
  this.createInvitation.InvitationHTML = ''
  
  this.endpoint.createInvitation(this.createInvitation).subscribe((data)=>{
    this.response = data
    this.spinner.hide();
    if(this.response.responseCode == '00'){
      this.notify.showSuccess('Invite created')
    }
    else{
      this.notify.showWarning(this.response.responseMsg)
    }
  },(error) => {
    this.notify.showError(error.errorMsg);
    this.spinner.hide();
  })
}

  updateCKStyleOne(){
    this.text1 = this.valueOne
    console.log(this.text1);
    this.text1 = "<html>"+this.text1+ "</html>"     
  }

  updateCKStyleTwo(){    
    this.text2 = this.valueOne
    this.text2 = "<html>"+this.text2+ "</html>"     
  }
  updateCKStyleThree(){
    this.date = this.valueOne
    this.date = "<html>"+this.date+ "</html>"     
  }

  updateCKStyleFour(){
    this.time = this.valueOne
    this.time = "<html>"+this.time+ "</html>"     
  }
  updateCKStyleFive(){
    this.rsvp = this.valueOne
    this.rsvp = "<html>"+this.rsvp+ "</html>"     
  }

  updateCKStyleSix(){
    this.inviter_invite = this.valueOne
    this.inviter_invite = "<html>"+this.inviter_invite+ "</html>"     
  }

  updateCKStyleSeven(){
    this.address = this.valueOne
    this.address = "<html>"+this.address+ "</html>"     
  }
  updateCKStyleEight(){
    this.youAre = this.valueOne
    this.youAre = "<html>"+this.youAre+ "</html>"     
  }

  updateCKStyleNine(){
    this.and = this.valueOne
    this.and = "<html>"+this.and+ "</html>"    
  }

  public onChange( editor:any ) {
    console.log( editor );
    
    
  }

}
