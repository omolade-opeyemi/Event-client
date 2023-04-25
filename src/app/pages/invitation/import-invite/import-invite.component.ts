import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-invite',
  templateUrl: './import-invite.component.html',
  styleUrls: ['./import-invite.component.scss']
})
export class ImportInviteComponent implements OnInit {

  drawer: boolean = false;
  drawer_min: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

}
