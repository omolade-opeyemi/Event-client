import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-walletpage',
  templateUrl: './walletpage.component.html',
  styleUrls: ['./walletpage.component.scss']
})
export class WalletpageComponent implements OnInit {

  constructor(private walletservice: WalletService) { }

  page:string ='';
  ngOnInit(): void {
    this.page = 'passcode'
    this.walletservice.requestPage$.subscribe(message => {this.page = message});    
  }

}
