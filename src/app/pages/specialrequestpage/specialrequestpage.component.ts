import { Component, OnInit } from '@angular/core';
import { SpecialRequestService } from 'src/app/service/special-request.service';
@Component({
  selector: 'app-specialrequestpage',
  templateUrl: './specialrequestpage.component.html',
  styleUrls: ['./specialrequestpage.component.scss']
})
export class SpecialrequestpageComponent implements OnInit {

  constructor(private interaction: SpecialRequestService) { }

page:string=''
  ngOnInit(): void {
    this.interaction.requestBack$.subscribe(message => {this.page = message})
    this.page = 'home'
  }
  backHome(){
    this.page = 'home'
    this.interaction.getrequestHead('main')
  }
  psecurity(){
    this.page = 'security'
    this.interaction.getrequestHead('non')
  }
  
  rar(){
    this.page = 'rar'
    this.interaction.getrequestHead('rar')

  }
  ipr(){
    this.page = 'ipr'
    this.interaction.getrequestHead('ipr')
  }
  bookAservice(){
    this.page = 'requests'
  }

}
