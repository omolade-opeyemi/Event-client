import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'mwl-demo-utils-calendar-header',
  templateUrl: './demo-utils.component.html',
  styleUrls: ['./demo-utils.component.scss']
})
export class DemoUtilsComponent implements OnInit {

  @Input()
  view!: CalendarView;

  @Input()
  viewDate!: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;

  constructor() { }

  ngOnInit(): void {
  }

}
