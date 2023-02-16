import { Component, OnInit } from '@angular/core';
import { frameAnimation } from 'src/app/animations/app.animation';
import { Router } from '@angular/router';
import { individualAccount, AccountLogin, CreateBussiness, Login, CreatorAccount } from 'src/app/models/authentication';
import { NgForm } from '@angular/forms';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
// import { InteractionService } from 'src/app/services/interaction.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss'],
  animations: [
    frameAnimation
 ]
})
export class AuthenticationPageComponent implements OnInit {

  constructor(private route:Router,
    private endpoint: EndpointsService,
    private notifyService: NotificationService,
    // private interact: InteractionService,
    private spinner: NgxSpinnerService,
  ) { }

  page:any
  passwordPtn = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  individualLog = new AccountLogin('','');
  accountLogin = new Login('','');
  individualReg = new individualAccount('','','',0,'','',0,'',0,'','','','','','','',this.individualLog);
  bussinessReg = new CreateBussiness('','',0,'',0,'',0,'','','','','','','',this.individualLog);
  creatorAccount = new CreatorAccount('','','','','',0,0,'','',this.individualLog)
  password2 = '';
  firstName = '';
  lastName = '';
  statelga = '';
  response:any;
  states:any=[];
  lga:any = [];
  otpEmail:any='';
  bizType:any = [];
  section:any

  ngOnInit(): void {
    localStorage.clear();
    this.page='landing'
    this.section= 'one'
    this.getStates();
    this.getBizTypes();
  }
getStarted(){
  this.page='two'
    this.section= 'two'
}
  getBizTypes(){
    this.endpoint.getBusinessType().subscribe((data)=>{
      this.response = data;
      if (this.response.responseCode == '00'){
        this.bizType=this.response.responseData;
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
    })
  }
  getStates(){
    this.endpoint.getStates().subscribe((data)=>{
      this.response = data;
      if (this.response.responseCode == '00'){
        this.states=this.response.responseData;
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
    })
  }

  
  dashBoard(){
    this.spinner.show();
    this.endpoint.creatorLogin(this.accountLogin).subscribe((data)=>{
      this.response = data;  
      this.spinner.hide();
      if (this.response.responseCode == '00'){
        let loginData = this.response.responseData;
        localStorage.setItem('token', loginData.token);
        localStorage.setItem('profileId', loginData.userProfile.id);
        localStorage.setItem('name', loginData.userProfile.name),
        localStorage.setItem('email', loginData.userProfile.email)
        this.route.navigate(['/dashboard']);
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide();
    })
  }
  getlga(value: any) {
    this.individualReg.state = value.split(',')[1];
    this.creatorAccount.stateId = value.split(',')[0];
    this.endpoint.getLga(value.split(',')[0]).subscribe(data => {
      this.response = data;  
        this.lga= this.response.responseData })
  }
  getLgaBiz(value:any){
    this.bussinessReg.state = value.split(',')[1];
    this.bussinessReg.stateId = value.split(',')[0];
    // this.endpoint.getLga(value.split(',')[0]).subscribe(data => {
    //   this.response = data;  
    //     this.lga= this.response.responseData })
  }
  bHome(){
    this.page='landing'
    this.section = 'one'
  }
  login(){
    this.page='two'
  }
  bLogin(){
    this.page='two'
  }
  lpassword(){
    this.page='three'
  }
  register(){
    this.page='four'
  }
  individual(){
    this.individualReg.supplierCategoryId = 2;
    this.page='five'
  }

  Iloc(data:NgForm){
    console.log(this.individualReg);
    console.warn(data);
    data.resetForm;
    this.page='six'
  }
  
  bindividual(){
    this.page='five'
  }
  Ipassword( data:NgForm){
    console.log(this.individualReg);
    console.warn(data);
    this.page='seven'
  }
  
  bIloc(){
    this.page='six'
  }
  business(){
    this.bussinessReg.supplierCategoryId = 3;
    this.page='eight'
  }
  BLoc(data:NgForm){
    console.log(this.bussinessReg);
    this.page='nine'
  }

  bBusiness(){
    this.page='eight'
  }
  businessContact(data:NgForm){
    console.log(this.bussinessReg);
    this.page='ten'
  }
  bBLoc(){
    this.page='nine'
  }
  businessPassword(data:NgForm){
    this.bussinessReg.primaryContactName = this.firstName+' '+this.lastName;
    console.log(this.bussinessReg);
    this.page='eleven'
  }
  bBusinessContact(){
    this.page='ten'
  }
  registerIndividual(data:NgForm){
    this.spinner.show()
    this.otpEmail = this.individualLog.email;
    this.endpoint.creatorRegistration(this.creatorAccount).subscribe((data)=>{
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00'){
        this.page='otp';
        this.notifyService.showSuccess(this.response.responseData)
      }
      else{
        this.notifyService.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notifyService.showError(error.message);
      this.spinner.hide()
    })
    
  }
  registerBusiness(data:NgForm){
    this.otpEmail = this.individualLog.email;
    // this.endpoint.businessAccount(this.bussinessReg).subscribe((data)=>{
    //   console.log(data);
    //   this.response = data;
    //   if (this.response.responseCode == '00'){
    //     this.page='otp'
    //   }
    //   else{
    //     this.notifyService.showError(this.response.responseMsg)
    //   }
    // },(error) => {
    //   this.notifyService.showError(error.error.responseMsg);
    // })
  }

  otpCode:any
  getOtp(item: any) {
    this.otpCode = item.txt1 + item.txt2 + item.txt3 + item.txt4 + item.txt5 + item.txt6;
    console.warn(this.otpCode);
    this.endpoint.verifyCode({ email: this.otpEmail, code: this.otpCode }).
      subscribe((data) => {
        this.response = data;
        if (this.response.responseCode == '00') {
          this.page='two'
        }
        else {
          this.notifyService.showError(this.response.responseMsg)
          this.page = 'otp';
        };
      },(error) => {
        this.notifyService.showError(error.message);
      } );
  }
resendOtp(){
  this.endpoint.resendVerificationCode(this.otpEmail).subscribe((data)=>{
    this.response = data;
    if (this.response.responseCode == '00'){
      this.notifyService.showSuccess(this.response.responseMsg)
    }
    else{
      this.notifyService.showError(this.response.responseMsg)
    }
  },(error) => {
    this.notifyService.showError(error.message);
  } )
}
 
  otp(){
    this.page='otp'
  }
  
  resetPassword(){
    this.page='twelve'
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



