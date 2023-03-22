import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-walletpage',
  templateUrl: './walletpage.component.html',
  styleUrls: ['./walletpage.component.scss']
})
export class WalletpageComponent implements OnInit {

  constructor(private walletservice: WalletService) { }

  page=''
  ngOnInit(): void {
    this.page = 'walletpageDash'
    // this.walletservice.requestPage$.subscribe(message => {this.page = message});    
    this.walletservice.subPage$.subscribe(message => {this.page = message})    
  }

}
