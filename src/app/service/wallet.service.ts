import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }

  private requestPasscode = new Subject<string>();
  requestPasscode$ = this.requestPasscode.asObservable();

  getrequestPasscode(message: string){
    this.requestPasscode.next(message);
  }

  public requestPage = new Subject<string>();
  requestPage$ = this.requestPage.asObservable();

  getrequestPage(message: string){
    this.requestPage.next(message);
  }

}
