import { Component, OnInit } from '@angular/core';

interface Invoice {
  invoiceId: string;
  description: string;
  invoiceDate: string;
  dueDate: string;
  status: string;
  amount: number;
}

const INVOICES: Invoice[] = [
  {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  }, {
    invoiceId: "9674GDFG",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    invoiceDate: "Sept 26, 2022",
    dueDate: "Sept 26, 2022",
    status: "Done",
    amount: 2400,
  },
];
@Component({
  selector: 'app-ipr',
  templateUrl: './ipr.component.html',
  styleUrls: ['./ipr.component.scss']
})
export class IprComponent implements OnInit {
  invoices = INVOICES;
  constructor() { }

  ngOnInit(): void {
  }

}
