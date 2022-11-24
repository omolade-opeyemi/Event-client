import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



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
}