import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatethree',
  templateUrl: './templatethree.component.html',
  styleUrls: ['./templatethree.component.scss']
})
export class TemplatethreeComponent implements OnInit {

  title:string = "Birthday Party";
  celebrant_name:string = "Aaron Miller"
  location:string = "GLENDENNING GOLF RESORT"
  date:string = "23rd September 2022"
  time:string = "4:00PM"
  address:string = "345 SAINT BENEDICT STREET, JOSHUA TREE California"
  constructor() { }

  ngOnInit(): void {
  }

}
