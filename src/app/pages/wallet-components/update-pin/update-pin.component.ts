import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-update-pin',
  templateUrl: './update-pin.component.html',
  styleUrls: ['./update-pin.component.scss']
})
export class UpdatePinComponent implements OnInit {

  constructor(    private walletservice: WalletService,
    ) { }

  ngOnInit(): void {
  }
  backToLanding(){
    this.walletservice.getMainPage('wpasscode');
  }
}
