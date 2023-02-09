import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor() { }

  private requestDetail = new Subject<string>();
  requestDetail$ = this.requestDetail.asObservable();

  getrequestDetail(message: string){
    this.requestDetail.next(message);
  }

  private category = new Subject<string>();
  category$ = this.category.asObservable();

  getCategoy(message:string){
    this.category.next(message)
  }

  private vendorDetail = new Subject<string>();
  vendorDetail$ = this.vendorDetail.asObservable();

  getVendorDetail(message:string){
    this.vendorDetail.next(message)
  }
}