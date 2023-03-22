import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private screenWidth = new Subject<boolean>();
  sharedscreenWidth = this.screenWidth.asObservable();

  getscreenWidth(message: boolean){
    this.screenWidth.next(message);
  }

  private screenSize = new Subject<number>();
  screenSize$ = this.screenSize.asObservable();

  getscreenSize(message: number){
    this.screenSize.next(message);
  }

  private plan = new Subject<string>();
  plan$ = this.plan.asObservable();

  getPlan(message: string){
    this.plan.next(message)
  }

  private invoice =  new Subject<string>();
  invoice$ = this.invoice.asObservable();

  getInvoice(message: string){
    this.invoice.next(message)
  }
}
