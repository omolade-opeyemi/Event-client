import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import Chart from 'chart.js/auto';
import { Budgeting, BudgetDetails, PlaceHolder } from 'src/app/models/events';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';



interface Country {
  name: string;
  service: string;
  flag: string;
  area: number;
  population: number;
  amount: number;
  status: string
}

@Component({
  selector: 'app-planbudgetpage',
  templateUrl: './planbudgetpage.component.html',
  styleUrls: ['./planbudgetpage.component.scss']
})
export class PlanbudgetpageComponent implements OnInit {
  toggle: boolean = false;
  toggleFood: any;
  page: string = ''
  response: any;
  showFiller = false;

  placeHolder = new PlaceHolder(0,'', '', '', '', '', '', '', '', '', '');
  budgetDetail = new BudgetDetails(0, 0, 0, 0, 0, 0, 0, 0);
  budgetDetails: BudgetDetails[] = []
  budgeting = new Budgeting(217, true,0, this.budgetDetails);
  budgetPlaceHolders: any[] = []
  budgetBuild = 0;
  budgetEstimate = 0;
  

  COUNTRIES: Country[] = [
    {
      name: 'Russia',
      service: 'Amala',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754,
      amount: 20,
      status: 'pending'

    },
    {
      name: 'Canada',
      service: 'Amala',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199,
      amount: 20,
      status: 'pending'
    },
    {
      name: 'United States',
      service: 'Amala',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463,
      amount: 20,
      status: 'pending'
    },
    {
      name: 'China',
      service: 'Amala',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397,
      amount: 20,
      status: 'pending'
    },
  ];
  donutChartData = [
    {
      label: 'Food',
      value: 5,
      color: "#3b8061",
    },
    {
      label: 'Music',
      value: 13,
      color: 'blue',
    },
    {
      label: 'Print',
      value: 5,
      color: 'red',
    },
  ];


  public chart: any;
  countries = this.COUNTRIES;
  closeResult = '';


  selected: any[] = []
  selectFood(i: any, vendor: any) {
    this.selected.push(vendor)
    this.toggleFood = i;
  }
  removeFood(data: any) {
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
    }, {
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
    }, {
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
    }, {
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
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    ) { }



  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis

        labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue',],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100, 432, 253, 34],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ],
          hoverOffset: 4,


        }],
      },

      options: {
        aspectRatio: 5,
      }

    });
  }
  ngOnInit(): void {
    
    
    this.getEventDetails();
    this.getVendorCategories();
    this.getEventBudgetSummary();
    this.vendorService.requestDetail$.subscribe(message => { this.page = message })
  }

  open(content: any) {
		this.modalService.open(content, { centered: true });
	}


  eventBudgetSummary:any
  actualisedBudget:any;
  getEventBudgetSummary(){
    this.spinner.show();  
    this.endpoint.getEventBudgetSummary(Number(localStorage.getItem('profileId')),
    Number(localStorage.getItem('eventId'))).subscribe((data)=>{      
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.eventBudgetSummary = this.response.responseData;
        if(this.eventBudgetSummary.length == 0){
          this.actualisedBudget = 0
        }
        else{
          this.actualisedBudget = this.eventBudgetSummary[0].budgetActualized
        }
        this.budgetBuild = this.eventBudgetSummary[0].budgetBuild;
        for(let i = 0; i < this.eventBudgetSummary.length; i++){
          var eventBudgetCategoryDetails = this.eventBudgetSummary[i].eventBudgetCategoryDetails;
          for (let x = 0; x < eventBudgetCategoryDetails.length; x++){
            var one = eventBudgetCategoryDetails[x]  
            this. addToPlanBudgetSummary(one)
          }
        }
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }
  eventDetail:any;
  getEventDetails(){
    this.spinner.show()
    this.endpoint.getEventDetails(Number(localStorage.getItem('eventId'))).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.eventDetail = this.response.responseData;
        console.log(this.eventDetail);
        
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

  randomString(length:any, chars:any) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}



  addToPlanBudgetSummary(data:any){
    this.placeHolder.id = data.id
    this.placeHolder.rate = data.rate;
    this.placeHolder.quantity = data.quantity
    this.placeHolder.serviceName = data.serviceName;
    this.placeHolder.amount = data.amount;
    this.placeHolder.serviceId = '';
    this.placeHolder.status = data.status;
    this.placeHolder.vendorImg = data.vendorImage;
    this.placeHolder.serviceCategory = data.category;
    this.placeHolder.serviceVendor = data.vendorName;
    var values: PlaceHolder = new PlaceHolder(this.placeHolder.id,this.placeHolder.serviceCategory, this.placeHolder.serviceVendor,
      this.placeHolder.serviceName, this.placeHolder.quantity,
      this.placeHolder.rate, this.placeHolder.amount,
      this.placeHolder.status, this.placeHolder.vendorImg,
      this.placeHolder.VendorId, this.placeHolder.serviceId)
    this.budgetPlaceHolders.push(values);
    this.categories = [];
    for (let f = 0; f < this.budgetPlaceHolders.length; f++) {
      this.categories.push(this.budgetPlaceHolders[f].serviceCategory)
    }
    var category = [...new Set(this.categories)];
    this.category = category
    this.categorised = []
    var amount = 0;
    var rString;
    for (let g = 0; g < this.category.length; g++) {
      var item = this.budgetPlaceHolders.filter((item) => item.serviceCategory == this.category[g]);

      for (let h=0; h < item.length; h++){
        amount += item[h].rate * item[h].quantity;
        rString = this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      }

      var doughnut = {label: this.category[g], value:amount, color: '#'+ rString}
      var single = { category: this.category[g], services: item ,totalAmount:amount }
      // this.donutChartData.push(doughnut)
      this.categorised.push(single)
    }
    console.log(this.categorised);
    
  }


  categories: any[] = []
  category: any[] = []
  categorised: any[] = []
  addToPlan(qty: any, data: any) {
    this.budgetDetail.serviceId = data.serviceId;
    this.budgetDetail.unitPrice = data.price;
    this.budgetDetail.quantityRequested = data.quantity;
    this.placeHolder.rate = data.price;
    this.placeHolder.quantity = qty;
    this.placeHolder.serviceName = data.serviceName;
    this.placeHolder.amount = data.price * qty;
    this.budgetBuild += this.placeHolder.amount;
    this.placeHolder.serviceId = data.serviceId;
    this.placeHolder.status = 'pending'
    // var values: PlaceHolder = new PlaceHolder(this.placeHolder.serviceCategory, 
    //   this.placeHolder.serviceVendor,
    //   this.placeHolder.serviceName, this.placeHolder.quantity,
    //   this.placeHolder.rate, this.placeHolder.amount,
    //   this.placeHolder.status, this.placeHolder.vendorImg,
    //   this.placeHolder.VendorId, this.placeHolder.serviceId)
    // this.budgetPlaceHolders.push(values);
    this.categories = [];
    for (let a = 0; a < this.budgetPlaceHolders.length; a++) {
      this.categories.push(this.budgetPlaceHolders[a].serviceCategory)
    }
    var category = [...new Set(this.categories)];
    this.category = category
    this.categorised = []
    var amount = 0;
    var rString;
    for (let b = 0; b < this.category.length; b++) {
      var item = this.budgetPlaceHolders.filter((item) => item.serviceCategory == this.category[b]);
      for (let h=0; h < item.length; h++){
        amount += item[h].rate * item[h].quantity;
        rString = this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      }
      var doughnut = {label: this.category[b], value:amount, color: '#'+ rString}
      var single = { category: this.category[b], services: item, totalAmount:amount }
      this.categorised.push(single)
      // this.donutChartData.push(doughnut)
      console.log(this.donutChartData);
    }
    this.notify.showInfo('Service added to plan')
  }

  servicesSelected: any[] = []
  selectedServices(data: any, item: any) {
    if (data.target.checked) {      
      this.budgetDetail.eventSupplierId = item.services[0].VendorId;
      this.budgetDetail.serviceId = item.services[0].serviceId;
      this.budgetDetail.budget = 0
      this.budgetDetail.unitPrice = item.services[0].rate;
      this.budgetDetail.totalPrice = item.services[0].amount;
      this.budgetDetail.totalActualRequested = item.services[0].quantity;
      this.budgetDetail.quantityRequested = item.services[0].quantity;
      // var serviceAdded: BudgetDetails = new BudgetDetails(this.budgetDetail.eventSupplierId,
      //   this.budgetDetail.serviceId, this.budgetDetail.budget,
      //   this.budgetDetail.totalActualRequested, this.budgetDetail.unitPrice,
      //   this.budgetDetail.totalPrice, this.budgetDetail.quantityRequested)
      // this.servicesSelected.push(serviceAdded);
    }
    else{
      this.servicesSelected.splice(this.servicesSelected.indexOf(item), 1);
    }

  }
  sendCreateEventBudget() {
  this.spinner.show()
    this.budgeting.sendRequest = true;
    this.budgeting.budgetDetails = this.servicesSelected;
    this.budgeting.eventId = Number(localStorage.getItem('eventId'))
    this.endpoint.CreateEventBudget(this.budgeting).subscribe((data) => {
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.notify.showSuccess('Budget sent')
      }
      else {
        this.notify.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }
  saveCreateEventBudget() {
    this.spinner.show()
    this.budgeting.sendRequest = false;
    this.budgeting.budgetDetails = this.servicesSelected;
    this.budgeting.eventId = Number(localStorage.getItem('eventId'))
    this.endpoint.CreateEventBudget(this.budgeting).subscribe((data) => {
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.notify.showSuccess('Budget sent')
      }
      else {
        this.notify.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }

  qty:number[]=[];
  serviceIndex: any;
  serviceQnty(data: any, i: any) {
    this.serviceIndex = i;
    var value = (this.qty.at(i) || 0)
    if (data == '+') {
      value += 1
      this.qty[i]=value
    }
    else if (data == '-' && value != 0) {
      value -= 1
      this.qty[i]=value
    }
  }

  vendorCategories: any
  getVendorCategories() {
    this.spinner.show();
    this.endpoint.getVendorCategories().subscribe((data) => {
      this.response = data;
      this.spinner.hide();
      if(this.response.responseCode == '00'){
        this.vendorCategories = this.response.responseData;
      }
      else{
        this.notify.showError(this.response.responseMsg);
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }

  vendorCategory: any;
  foodToggle(data: string) {
    console.log(data);

    this.vendorCategory = data;
    this.placeHolder.serviceCategory = data
    // this.toggle = !this.toggle;
    this.getVendorByCategory(data)
    this.page = 'list'
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  /////// Vendors //////

  serviceCategories: any
  vendordata: any;
  getVendorByCategory(data: any) {
    this.spinner.show()
    this.endpoint.getVendorByCategory(data).subscribe((data) => {
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.vendordata = this.response.responseData;
        this.budgetDetail.eventSupplierId = this.vendorDetail.supplierId;
      }
      else {
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }
  detail = ''
  detailPage(data: any) {
    console.log(data);
    this.placeHolder.VendorId = data.supplierId
    this.placeHolder.serviceVendor = data.vendorName;
    this.placeHolder.vendorImg = data.image[0]
    this.page = 'detail'
    // this.getVendorServiceDetail(data.supplierId)
  }

  ///////// Vendor Detail ////////////////
  vendorDetail: any
  vendorServices: any[] = []
  images: any[] = [];
  carousel: any[] = [];
  // getVendorServiceDetail(data: any) {
  //   this.spinner.show();
  //   this.endpoint.getVendorServiceDetail(data,this.placeHolder.serviceCategory).subscribe((result) => {
  //     this.response = result;
  //     this.spinner.hide()
  //     if (this.response.responseCode == '00') {
  //       this.vendorDetail = this.response.responseData;
  //       this.vendorServices = this.vendorDetail.vendorServices;
  //       this.carousel = this.vendorDetail.images
  //     }
  //     else {
  //       this.notify.showError(this.response.responseMsg)
  //     }
  //   },(error) => {
  //     this.notify.showError(error.message);
  //     this.spinner.hide()
  //   })
  // }
}
