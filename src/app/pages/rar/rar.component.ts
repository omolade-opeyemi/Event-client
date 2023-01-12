import { Component, OnInit } from '@angular/core';

interface Invoice {
  solution: string;
  description: string;
  reqDate: string;

}

const INVOICES: Invoice[] = [
  {
    solution: "Physical Security",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Armed Guarding",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Surveilance",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Drone",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  }, {
    solution: "Armed Guarding",
    description: "Lörem ipsum egogåde gyssa. Fare.... ",
    reqDate: "Sept 26, 2022",

  },
];

@Component({
  selector: 'app-rar',
  templateUrl: './rar.component.html',
  styleUrls: ['./rar.component.scss']
})
export class RarComponent implements OnInit {
  invoices = INVOICES;
  constructor() { }

  ngOnInit(): void {
  }

}
