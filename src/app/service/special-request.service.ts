import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpecialRequestService {

  constructor() { }

  private requestHead = new Subject<string>();
  requestHead$ = this.requestHead.asObservable();

  getrequestHead(message: string){
    this.requestHead.next(message);
  }

  private requestBack = new Subject<string>();
  requestBack$ = this.requestBack.asObservable();

  getrequestBack(message: string){
    this.requestBack.next(message)
  }
}
