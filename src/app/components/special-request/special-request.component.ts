import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'
import { SpecialRequestService } from 'src/app/service/special-request.service';


@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.scss']
})
export class SpecialRequestComponent implements OnInit {

  constructor(private interact:InteractionService, 
    private specialRequestService: SpecialRequestService,
    public router: Router,) { }

    page='';
  collapsed=false
  screenWidth = 0
  authpage=''
  sidebar=false;
  header=''

  ngOnInit(): void {
    this.header = 'main'
    this.page='one'
    this.specialRequestService.requestHead$.subscribe(message => {this.header = message})
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message})
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

  back(){
    this.specialRequestService.getrequestBack('home')
    this.header = 'main'
  }

}
