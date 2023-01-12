import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.scss']
})
export class PasscodeComponent implements OnInit {

  constructor(private walletservice : WalletService) { }

  ngOnInit(): void {
  }
  dashBoard(){
    this.walletservice.getrequestPage('dashboard')

  }

}
