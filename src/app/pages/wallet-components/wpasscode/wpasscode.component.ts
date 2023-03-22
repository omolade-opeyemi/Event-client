import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { WalletLogin } from 'src/app/models/payments';
import { NotificationService } from 'src/app/service/notification.service';
import { WalletService } from 'src/app/service/wallet.service';


@Component({
  selector: 'app-wpasscode',
  templateUrl: './wpasscode.component.html',
  styleUrls: ['./wpasscode.component.scss']
})
export class WpasscodeComponent implements OnInit {

  constructor(private endpoint: EndpointsService,
    private spinner: NgxSpinnerService,
    private notify: NotificationService,
    private walletservice : WalletService) { }

    walletLogin = new WalletLogin(0,'');
    response:any;

  ngOnInit(): void {
  }

  loginResponseMsg:any;
  loginResponse:any;
  loginPin(data:any){
    this.spinner.show();
    this.walletLogin.pin = data.txt1+data.txt2+data.txt3+data.txt4+data.txt5+data.txt6;
    this.walletLogin.profileId = Number(localStorage.getItem('profileId'));
    this.endpoint.WalletLogin(this.walletLogin).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
    if(this.response.responseCode == '00'){
      this.walletservice.getMainPage('walletpage');
      this.walletservice.getSubPage('dashboard');

    }
    else{
      this.notify.showError(this.response.responseMsg)
    }
    },(error) => {
      this.notify.showError(error.errorMsg)
    })
  }

  forgetPin(){
    this.walletservice.getMainPage('walletpage');
    this.walletservice.getSubPage('updatepin');
  }

  move(e:any,p:any,c:any,n:any){
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if(length == maxlength){
      if(n != ''){ n.focus();}}
      if(e.key === 'Backspace'){
        if(p != ''){p.focus();}}
  }

}
