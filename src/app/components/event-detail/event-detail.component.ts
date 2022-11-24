import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openTicketting(content:any) {
		this.modalService.open(content, { size: 'xl' });
	}
  openCheckout(content:any){
    this.modalService.dismissAll()
    this.modalService.open(content, { size: 'xl' });
  }


}
