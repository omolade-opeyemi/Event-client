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
    })
  }
  
  foodToggle(data:string) {
    this.vendorService.getCategoy(data)
    // this.toggle = !this.toggle;
    this.getVendorByCategory(data)
    this.page = 'list'
  }

  openXl(content:any) {
		this.modalService.open(content, { size: 'xl', centered: true });
	}
  
  /////// Vendors //////
  
  serviceCategories:any
  vendordata:any;
  getVendorByCategory(data:any){    
    this.endpoint.getVendorByCategory(data).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.vendordata = this.response.responseData
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    })
  }
  detail=''
  detailPage(data:any){
    console.log(data);
    this.page = 'detail'
   this.getVendorServiceDetail(data)
  }

  ///////// Vendor Detail ////////////////
  vendorDetail:any
  vendorServices:any[] = []
  images:any[] = [];
  carousel:any[]=[];
  getVendorServiceDetail(data:any){
    this.endpoint.getVendorServiceDetail(data).subscribe((result)=>{
      this.response = result;
      console.warn(this.response);
      if(this.response.responseCode == '00'){
        this.vendorDetail = this.response.responseData;
        this.vendorServices = this.vendorDetail.vendorServices;
        this.carousel = this.vendorDetail.images
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    })
  }
}
