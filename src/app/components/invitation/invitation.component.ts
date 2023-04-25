import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router';
import { InvitationService } from 'src/app/service/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  constructor(
    private interact:InteractionService,
    public router: Router,
    private iv: InvitationService
  ) { }

  ivPage='invitation';
  page='invoice';
  collapsed=false
  screenWidth = 0
  authpage=''
  sidebar=false;
  ngOnInit(): void {
    this.iv.ivPage$.subscribe(message => {this.ivPage = message})
    this.interact.invoice$.subscribe(message => {this.page = message});
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message});
    this.ivPage = 'invitation';

 
  }
  toggleSideBar(){
    this.sidebar = !this.sidebar;
    if( this.sidebar == true){
      // this.openEnd(content)
    }
    else{
      // this.offcanvasService.dismiss(content)
    }
    
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
