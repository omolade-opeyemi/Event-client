import { Component, OnInit } from '@angular/core';
import { InvitationService } from 'src/app/service/invitation.service';


@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {

  constructor(
    private iv: InvitationService,

  ) { }

  ngOnInit(): void {
  }

  Invitation(){
    this.iv.getIvPage('invitation')
  }
  ivList(){
    this.iv.getIvPage('ivList')
  }
  seating(){
    this.iv.getIvPage('seating')
  }
  checkIn(){
    this.iv.getIvPage('checkIn')
  }
  ivGroup(){
    this.iv.getIvPage('ivGroup')
  }
}
