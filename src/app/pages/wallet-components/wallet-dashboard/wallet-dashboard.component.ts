import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface data {
  platform: string;
  platformImg: string;
  description: string;
  status: string;
  date:string;
  amount:number;
  transactionType:string;

}
const DATA: data[] = [
  {
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  },{
    platform: 'Event Management',
    platformImg: '',
    description: 'top up',
    status: 'success',
    date: '06 Dec, 2022/08:44 AM',
    amount:50000,
    transactionType:'Credit'
  }
   
]
@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class WalletDashboardComponent implements OnInit {

  constructor(config: NgbModalConfig,
     private modalService: NgbModal){ config.backdrop = 'static';
     config.keyboard = false;}
    
  pg: number = 1;
  paginate = 4;
  totalLength: any;
  

  ngOnInit(): void {
  }
  getWalletResponseTransactionHistory = DATA ;
  openVerticallyCentered(){
    console.warn('modal');
  }

  openMore(more:any) {
		this.modalService.open(more);
	}
  progressBar:any; 
progrssBarr(){
this.progressBar= document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressValue = 0;
let progressEndValue = 80;
let speed = 10;

let progress = setInterval(() => {
	progressValue++;
	// valueContainer.textContent = `${progressValue}%`;
	this.progressBar.style.background=`conic-gradient(
	#52CEB8 ${progressValue * 3.6}deg,
	#007AFF ${progressValue * 3.6}deg
	)`
	if (progressValue == progressEndValue){
		clearInterval(progress)
	}
},speed)
}

}
