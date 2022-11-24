import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Country {
  index: string;
  ticket_Name: string;
  ticket_Quantity: string;
  ticket_Price: number;
  status: string;
  salesEnd: string;
  more: string;
}

const COUNTRIES: Country[] = [
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
];



@Component({
  selector: 'app-createeventpage',
  templateUrl: './createeventpage.component.html',
  styleUrls: ['./createeventpage.component.scss']
})
export class CreateeventpageComponent implements OnInit {
  
  page:string=''

  countries = COUNTRIES;
  constructor(
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.page = 'one'
  }

  openLg(content:any) {
		this.modalService.open(content, { size: 'lg' });
	}
  eventDetail(){
    this.page='one'
  }
  tickets(){
    this.page= 'two'
  }
  review(){
    this.page = 'three'
  }


}
