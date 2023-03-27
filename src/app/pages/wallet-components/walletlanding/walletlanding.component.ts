import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-walletlanding',
  templateUrl: './walletlanding.component.html',
  styleUrls: ['./walletlanding.component.scss']
})
export class WalletlandingComponent implements OnInit {

  constructor(private walletservice:WalletService) { }

  ngOnInit(): void {
  }

  activateWallet(){
    // this.walletservice.getrequestPage('passcode')  ;
    this.walletservice.getMainPage('walletpage');
    this.walletservice.getSubPage('passcode')

  }

}
