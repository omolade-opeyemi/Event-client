import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private interact:InteractionService,
    private walletservice: WalletService,
    public router: Router) { }
    // page='walletlanding';
    page=''
    header=''
    collapsed=false
    screenWidth = 0
    authpage=''
    sidebar=false;

  ngOnInit(): void {
    this.page='walletlanding'
    // this.walletservice.requestPasscode$.subscribe(message => {this.page = message})
    this.walletservice.requestPage$.subscribe(message => {this.page = message; console.warn(this.page)}),
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message})

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
