import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-planbudgetpage',
  templateUrl: './planbudgetpage.component.html',
  styleUrls: ['./planbudgetpage.component.scss']
})
export class PlanbudgetpageComponent implements OnInit {
  toggle: boolean = false;
  page:string = ''

  vendors: any = [
    {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },  {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },  {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },  {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/food.png',
      type: 'Food',
      color: '#FC9A6B',
      active: false
    }, {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },
    {
      image: '/assets/images/music.png',
      type: 'Music',
      color: '#04CFAC',
      active: false
    },
    {
      image: '/assets/images/print.png',
      type: 'Print',
      color: '#FCCD44',
      active: false
    },

  ];
  constructor(private vendorService: VendorService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.vendorService.requestDetail$.subscribe(message => {this.page=message})
  }
  foodToggle() {
    this.toggle = !this.toggle;
    this.page = 'list'
  }

  openXl(content:any) {
		this.modalService.open(content, { size: 'xl', centered: true });
	}
  
}
