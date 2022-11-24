import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  collapsed = true;
  active = 1;
  show='two'
  rev=true;
  authpage=''

  ngOnInit(): void {
  }
  isauthRouth(){
    return this.router.url == '/pricing';
  }

}
