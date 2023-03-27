import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';
import { Activatewallet } from 'src/app/models/payments';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.scss']
})
export class PasscodeComponent implements OnInit {

  walletregistration = new Activatewallet(0,'','','');
  response:any;

  constructor(private walletservice : WalletService,
    private endpoint: EndpointsService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
  }
  dashBoard(){
    this.walletservice.getrequestPage('dashboard')

  }
  move(e:any,p:any,c:any,n:any){
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if(length == maxlength){
      if(n != ''){ n.focus();}}
      if(e.key === 'Backspace'){
        if(p != ''){p.focus();}}
  }

  firstPin(data:any){
    console.log(data);
    this.walletregistration.walletPin=data.txt1+data.txt2+data.txt3+data.txt4+data.txt5+data.txt6;
    console.warn(this.walletregistration.walletPin)
  }

  pinError='';
  confirmPin:any;
  activateWallet(data:any){
    this.spinner.show();
    this.confirmPin=data.txt11+data.txt22+data.txt33+data.txt44+data.txt55+data.txt66;
    if(this.walletregistration.walletPin == this.confirmPin){
        this.walletregistration.profileId = Number(localStorage.getItem('profileId'))
      this.endpoint.activateWallet(this.walletregistration).subscribe((data)=>{
        this.response = data;
        this.spinner.hide();
        if(this.response.responseCode == '00'){
          // this.walletservice.getrequestPage('dashboard');
          this.walletservice.getMainPage('walletpage');
    this.walletservice.getSubPage('dashboard')
        }else{
          this.pinError = this.response.responseMsg;
        }
      },(error) => {
        this.pinError = error.message
        this.spinner.hide();
      })
    }
    else{
      this.pinError='Incorrect pin'
      this.spinner.hide();

    }
  }

}
