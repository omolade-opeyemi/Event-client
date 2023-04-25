import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CreateInvitation } from 'src/app/models/invitation';
import { InvitationService } from 'src/app/service/invitation.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { EndpointsService } from 'src/app/service/endpoints.service';



@Component({
  selector: 'app-templatetwo',
  templateUrl: './templatetwo.component.html',
  styleUrls: ['./templatetwo.component.scss'],
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
export class TemplatetwoComponent implements OnInit {

  response: any
  createInvitation = new CreateInvitation('', '', 0, '', '', '')
  pleaseJoin: string = "Please join us for a"
  celebrating: string = "celebrating"
  title: string = "Birthday Party";
  celebrant_name: string = "Aaron Miller"
  day: string = "Wednesday"
  time: string = "4:00PM"
  month: string = "September"
  year: string = "2022";
  date: string = "23"
  // location:string = "GLENDENNING GOLF RESORT"
  address: string = "345 SAINT BENEDICT STREET, JOSHUA TREE California"
  valueOne: any;
  selectedTemplate:any
  selectedTemplateCode:any


  constructor(
    private iv: InvitationService,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    this.iv.SelectedTemplate$.subscribe(message => {
      this.selectedTemplate = message
    });
    this.iv.InvitationTemplateCode$.subscribe( message =>{
      if(message != 0){        
        this.selectedTemplateCode = message
      }
    }
    )
    this.iv.captionLabel$.subscribe(message => {
      if (message.length != 0 && this.selectedTemplate == '2') {
        this.createInvite(message)
      }
    });
    
    
  }


  createInvite(data: string[]) {
    this.spinner.show();
    var invitation = 
    [{ id: 1, caption: this.pleaseJoin },
    { id: 2, caption: this.title },
    { id: 3, caption: this.celebrating },
    { id: 4, caption: this.celebrant_name },
    { id: 5, caption: this.day },
    { id: 6, caption: this.time },
    { id: 7, caption: this.date },
    { id: 8, caption: this.month },
    { id: 9, caption: this.year },
    { id: 10, caption: this.address }]
    var formData: any = new FormData();
    formData.append('Caption', data[0]);
    formData.append('Description', data[1]);
    formData.append('ProfileId', Number(localStorage.getItem('profileId')));
    formData.append('FormData', JSON.stringify(invitation));
    formData.append('InvitationTemplateCode', this.selectedTemplateCode);
    formData.append('InvitationHTML', '');

    this.endpoint.createInvitation(formData).subscribe((data) => {
      this.response = data
      this.spinner.hide();
      if (this.response.responseCode == '00') {
        this.notify.showSuccess('Invite created')
      }
      else {
        this.notify.showWarning(this.response.responseMsg)
      }
    }, (error) => {      
      this.notify.showError(error.responseMsg);
      this.spinner.hide();
    })
  }


  updateCKStyleOne() {
    this.pleaseJoin = this.valueOne;
    this.pleaseJoin = "<html>" + this.pleaseJoin + "</html>"
  }
  updateCKStyleTwo() {
    this.title = this.valueOne;
    this.title = "<html>" + this.title + "</html>"
  }
  updateCKStyleThree() {
    this.celebrating = this.valueOne;
    this.title = "<html>" + this.celebrating + "</html>"
  }
  updateCKStyleFour() {
    this.celebrant_name = this.valueOne;
    this.celebrant_name = "<html>" + this.celebrant_name + "</html>"
  }
  updateCKStyleFive() {
    this.day = this.valueOne;
    this.day = "<html>" + this.day + "</html>"
  }
  updateCKStyleSix() {
    this.time = this.valueOne;
    this.time = "<html>" + this.time + "</html>"
  }
  updateCKStyleSeven() {
    this.date = this.valueOne;
    this.date = "<html>" + this.date + "</html>"
  }
  updateCKStyleEight() {
    this.month = this.valueOne;
    this.month = "<html>" + this.month + "</html>"
  }
  updateCKStyleNine() {
    this.year = this.valueOne;
    this.year = "<html>" + this.year + "</html>"
  }
  updateCKStyleTen() {
    this.address = this.valueOne;
    this.address = "<html>" + this.address + "</html>"
  }
  // updateCKStyleEleven(){
  //   this.location = this.valueOne;    
  //   this.location = "<html>"+this.location+ "</html>"
  // }

}
