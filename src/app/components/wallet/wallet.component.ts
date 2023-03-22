import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'
import { WalletService } from 'src/app/service/wallet.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private interact:InteractionService,
    private walletservice: WalletService,
    public router: Router,
    public endpoint:EndpointsService,
    public notify:NotificationService,
    private spinner: NgxSpinnerService,
    ) { }
    // page='walletlanding';
    page=''
    header=''
    collapsed=false
    screenWidth = 0
    authpage=''
    sidebar=false;
    response:any;

  ngOnInit(): void {
    this.getWalletStatus();
    // this.walletservice.requestPasscode$.subscribe(message => {this.page = message})
    // this.walletservice.requestPage$.subscribe(message => {this.page = message}),
    this.walletservice.mainPage$.subscribe(message => {this.page= message}) 
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message});

  }

  getWalletStatus(){
    this.spinner.show();
    this.endpoint.getWalletActivationStatus(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.page = 'wpasscode';
      }else{
        this.page='walletlanding';
      }
  },(error) => {
    this.notify.showError(error.errorMsg);
    this.spinner.hide();
  })
  }

  toggleSideBar(){
    this.sidebar = !this.sidebar;
  }
 
  isauthRouth(){
    this.authpage='/auth';
    return this.router.url === '/auth';
  }
  getBodyClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }


}
