import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(private interact:InteractionService,
    public router: Router,) { }

    page='';
  collapsed=false
  screenWidth = 0
  authpage=''
  sidebar=false;

  ngOnInit(): void {
    this.page='one'
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message})
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
