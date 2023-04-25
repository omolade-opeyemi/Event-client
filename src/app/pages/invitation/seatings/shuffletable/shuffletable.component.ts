import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';





export interface PeriodicElement {
  table: string;
  invitee_info: string;

  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '3',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '7',  symbol: 'equal'},
];

@Component({
  selector: 'app-shuffletable',
  templateUrl: './shuffletable.component.html',
  styleUrls: ['./shuffletable.component.scss']
})
export class ShuffletableComponent implements OnInit {

  @ViewChild(MatTable) table!:MatTable<any>

  displayedColumns: string[] = ['invitee_info', 'table', 'symbol'];
  dataSource = ELEMENT_DATA;
  response:any;

  constructor(
    private endpoint: EndpointsService,
    private notify:NotificationService,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
  }
drag(event:CdkDragDrop<PeriodicElement[]>){
moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
this.table.renderRows();
}

getAllInvitess:any;
getAllInvitees(){
  this.spinner.show();
  this.endpoint.getAllInvitees(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
    this.response = data;
    this.spinner.hide()
    if(this.response.responseCode == '00'){
      this.getAllInvitess = this.response.responseData;        
    }else{
      this.notify.showWarning(this.response.responseMsg)
    }
  },(error) => {
    this.notify.showError(error.errorMsg);
    this.spinner.hide();
  })
}
}
