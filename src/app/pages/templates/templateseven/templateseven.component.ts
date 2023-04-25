import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateseven',
  templateUrl: './templateseven.component.html',
  styleUrls: ['./templateseven.component.scss']
})
export class TemplatesevenComponent implements OnInit {

  husband_name: string = "Matt"
wife_name: string = "chloe"
date:string = "10"
year:string = "2022"
weekday: string = "Sunday"
month:string = "July"
time:string = "AT 5PM"
  constructor() { }

  ngOnInit(): void {
  }

}
