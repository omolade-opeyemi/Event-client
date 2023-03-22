import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private interact:InteractionService,
    public router: Router,) { }

    page='invoice';
  collapsed=false
  screenWidth = 0
  authpage=''
  sidebar=false;

  ngOnInit(): void {
    // this.page='requests';
    this.interact.invoice$.subscribe(message => {this.page = message});
    this.interact.sharedscreenWidth.subscribe(message => {this.collapsed=message});
    this.interact.screenSize$.subscribe(message => {this.screenWidth=message});
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

  invoiceList(){
    this.interact.getInvoice('invoice')

  }

}
