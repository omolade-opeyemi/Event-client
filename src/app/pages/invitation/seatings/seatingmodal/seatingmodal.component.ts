import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


export interface PeriodicElement {
  invitee_info: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitee_info: 'Sam Awazie', symbol: 'equal'},
  {invitee_info: 'Michael Awazie',  symbol: 'equal'},
  {invitee_info: 'Samuel Awazie', symbol: 'equal'},
  {invitee_info: 'Dan Awazie',  symbol: 'equal'},
  {invitee_info: 'John Awazie',  symbol: 'equal'},
  {invitee_info: 'Mary Awazie',  symbol: 'equal'},

];


@Component({
  selector: 'app-seatingmodal',
  templateUrl: './seatingmodal.component.html',
  styleUrls: ['./seatingmodal.component.scss']
})
export class SeatingmodalComponent implements OnInit {

  @ViewChild(MatTable) table!:MatTable<any>

  displayedColumns: string[] = ['invitee_info', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(
  ) { }

  ngOnInit(): void {
  }
drag(event:CdkDragDrop<PeriodicElement[]>){
moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
this.table.renderRows();
}

}
