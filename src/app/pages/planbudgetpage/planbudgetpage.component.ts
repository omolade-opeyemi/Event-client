import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-planbudgetpage',
  templateUrl: './planbudgetpage.component.html',
  styleUrls: ['./planbudgetpage.component.scss']
})
export class PlanbudgetpageComponent implements OnInit {
  toggle: boolean = false;
  toggleFood: any;
  page:string = ''
  response:any

 selected:any[]=[]
  selectFood(i:any,vendor:any){
    this.selected.push(vendor)
    this.toggleFood = i;
  }
  removeFood(data:any){
    this.selected.splice(this.selected.indexOf(data), 1);
  }
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
    private modalService: NgbModal,
    private endpoint: EndpointsService,
    private notify: NotificationService) { }

  ngOnInit(): void {
    this.getVendorCategories()
    this.vendorService.requestDetail$.subscribe(message => {this.page=message})
  }

  vendorCategories:any
  getVendorCategories(){
    this.endpoint.getVendorCategories().subscribe((data)=>{
      this.response = data;
      this.vendorCategories = this.response.responseData;
      console.log(this.vendorCategories);
    })
  }
  
  foodToggle() {
    this.toggle = !this.toggle;
    this.page = 'list'
  }

  openXl(content:any) {
		this.modalService.open(content, { size: 'xl', centered: true });
	}
  
}
