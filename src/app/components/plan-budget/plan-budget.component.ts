import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';
import { Router } from '@angular/router'
import { VendorService } from 'src/app/service/vendor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import Chart from 'chart.js/auto';
import { Budgeting, BudgetDetails, PlaceHolder } from 'src/app/models/events';
import { DeleteService } from 'src/app/models/service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

interface chartData {
  label: string;
  value: number;
  color: string
}

@Component({
  selector: 'app-plan-budget',
  templateUrl: './plan-budget.component.html',
  styleUrls: ['./plan-budget.component.scss']
})
export class PlanBudgetComponent implements OnInit {
  @ViewChild("serviceQty", { static: true })
  input!: ElementRef;

  toggle: boolean = false;
  toggleFood: any;
  page: string = ''
  response: any;
  showFiller = false;
  deleteService = new DeleteService(0,[],0);
  placeHolder = new PlaceHolder(0,'', '', '', '', '', '', '', '', '', '');
  budgetDetail = new BudgetDetails(0, 0, 0, 0, 0, 0, 0, 0);
  budgetDetails: BudgetDetails[] = []
  budgeting = new Budgeting(0, true, 0, this.budgetDetails);
  budgetPlaceHolders: any[] = []
  budgetBuild = 0;
  budgetEstimate = 0;
  // donutChartData:chartData[]=[]


  donutChartData = [
    {
      label: 'Drinks',
      value: 5,
      color: "#3b8061",
    },
    {
      label: 'Itercontinental',
      value: 3,
      color: 'blue',
    }, {
      label: 'Rentals',
      value: 2,
      color: "red",
    }

  ];




  public chart: any;
  closeResult = '';

  selected: any[] = []
  selectFood(i: any, vendor: any) {
    if (this.selected.includes(vendor)) {
      this.selected.splice(this.selected.indexOf(vendor), 1);
    }
    else {
      this.selected.push(vendor)
      this.toggleFood = i;
    }
  }
  removeFood(data: any) {
    this.selected.splice(this.selected.indexOf(data), 1);

  }

  constructor(private interact: InteractionService,
    public router: Router,
    private modalService: NgbModal,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
  ) { }

  pager = '';
  collapsed = false
  screenWidth = 0
  authpage = ''
  sidebar = false;

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
    this.page = 'one'
    this.interact.sharedscreenWidth.subscribe(message => { this.collapsed = message });
    this.interact.screenSize$.subscribe(message => { this.screenWidth = message });
    this.getEventDetails();
    this.getVendorCategories();
    this.getEventBudgetSummary();
  }

deleteModal(content:any){
  this.modalService.open(content,{ centered: true })
}


deleteBudgetItems(){
  this.spinner.show();
  this.deleteService.eventid = Number(localStorage.getItem('eventId'));
  this.deleteService.profileId = Number(localStorage.getItem('profileId'));
  this.endpoint.deleteBudgetItems(this.deleteService).subscribe((data)=>{
    this.response = data;
    this.spinner.hide()
    if(this.response.responseCode == '00'){
      this.modalService.dismissAll();
      this.notify.showInfo('service deleted');
      this.getEventBudgetSummary();
        this.deleteService.budgetDetailsId = [];
    }else{
      this.notify.showError(this.response.responseMsg)
    }
  },(error) => {
    this.notify.showError(error.error.responseMsg);
    this.spinner.hide()
  })
}


  toggleSideBar() {
    this.sidebar = !this.sidebar;
    if (this.sidebar == true) {
      // this.openEnd(content)
    }
    else {
      // this.offcanvasService.dismiss(content)
    }

  }

  isauthRouth() {
    this.authpage = '/auth';
    return this.router.url === '/auth';
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }



  ///////////////////////////////
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }


  eventBudgetSummary: any
  actualisedBudget: any;
  getEventBudgetSummary() {
    this.spinner.show();
    this.budgetPlaceHolders = []
    this.endpoint.getEventBudgetSummary(Number(localStorage.getItem('profileId')),
      Number(localStorage.getItem('eventId'))).subscribe((data) => {
        this.response = data;
        this.spinner.hide();
        if (this.response.responseCode == '00') {
          this.eventBudgetSummary = this.response.responseData;
          if (this.eventBudgetSummary.length == 0) {
            this.actualisedBudget = 0;
            this.budgetEstimate = 0;
            this.budgetBuild = 0;

          }
          else {
            this.actualisedBudget = this.eventBudgetSummary[0].budgetActualized;
            this.budgetEstimate = this.eventBudgetSummary[0].budget;
            this.budgetBuild = this.eventBudgetSummary[0].budgetBuild;

          }
          for (let i = 0; i < this.eventBudgetSummary.length; i++) {
            var eventBudgetCategoryDetails = this.eventBudgetSummary[i].eventBudgetCategoryDetails;
            for (let x = 0; x < eventBudgetCategoryDetails.length; x++) {
              var one = eventBudgetCategoryDetails[x]
              this.addToPlanBudgetSummary(one)
            }
          }
        }
        else {
          this.notify.showError(this.response.responseMsg)
        }
      }, (error) => {
        this.notify.showError(error.error.responseMsg);
        this.spinner.hide()
      })
  }
  eventDetail: any;
  getEventDetails() {
    this.spinner.show();
    this.endpoint.getEventDetails(Number(localStorage.getItem('eventId'))).subscribe((data) => {
      this.response = data;
      this.spinner.hide();
      if (this.response.responseCode == '00') {
        this.eventDetail = this.response.responseData;
      }
      else {
        this.notify.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notify.showError(error.error.responseMsg);
      this.spinner.hide()
    })
  }

  randomString(length: any, chars: any) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }


  donutChart: any[] = []

  addToPlanBudgetSummary(data: any) {
    this.placeHolder.id = data.id;
    this.placeHolder.rate = data.rate;
    this.placeHolder.quantity = data.quantity
    this.placeHolder.serviceName = data.serviceName;
    this.placeHolder.amount = data.amount;
    this.placeHolder.serviceId = data.serviceId;
    this.placeHolder.status = data.status;
    this.placeHolder.vendorImg = data.vendorImage;
    this.placeHolder.serviceCategory = data.category;
    this.placeHolder.serviceVendor = data.vendorName;
    this.placeHolder.VendorId = data.supplierId;
    var values: PlaceHolder = new PlaceHolder(
      this.placeHolder.id,
      this.placeHolder.serviceCategory,
      this.placeHolder.serviceVendor,
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
    this.categorised = [];
    this.donutChart = []
    var rString;
    for (let g = 0; g < this.category.length; g++) {
      var item = this.budgetPlaceHolders.filter((item) => item.serviceCategory == this.category[g]);
      var amount = 0;
      for (let h = 0; h < item.length; h++) {
        amount += item[h].rate * item[h].quantity;
        rString = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
      }
      var doughnut = { label: this.category[g], value: Number(amount), color: rString }
      var single = { category: this.category[g], services: item, totalAmount: amount };
      // this.donutChartData.push(doughnut)
      this.categorised.push(single);
      this.donutChart.push(doughnut);
    }
    // this.donutChartData = this.donutChart;
  }


  categories: any[] = []
  category: any[] = []
  categorised: any[] = []
  addToPlan(qty: any, data: any) {    
    // this.placeHolder.rate = data.price;
    // this.placeHolder.quantity = qty;
    // this.placeHolder.serviceName = data.serviceName;
    // this.placeHolder.amount = data.price * qty;
    // this.budgetBuild += this.placeHolder.amount;
    // this.placeHolder.serviceId = data.serviceId;
    // this.placeHolder.status = 'Not Sent';
    // var values: PlaceHolder = new PlaceHolder(
    //   this.placeHolder.serviceCategory,
    //   this.placeHolder.serviceVendor,
    //   this.placeHolder.serviceName, this.placeHolder.quantity,
    //   this.placeHolder.rate, this.placeHolder.amount,
    //   this.placeHolder.status, this.placeHolder.vendorImg,
    //   this.placeHolder.VendorId, this.placeHolder.serviceId)
    // this.budgetPlaceHolders.push(values);
    // this.categories = [];
    // for (let a = 0; a < this.budgetPlaceHolders.length; a++) {
    //   this.categories.push(this.budgetPlaceHolders[a].serviceCategory)
    // }
    // var category = [...new Set(this.categories)];
    // this.category = category
    // this.categorised = []
    // var rString;
    // for (let b = 0; b < this.category.length; b++) {
    //   var amount = 0;
    //   var item = this.budgetPlaceHolders.filter((item) => item.serviceCategory == this.category[b]);
    //   for (let h = 0; h < item.length; h++) {
    //     amount += item[h].rate * item[h].quantity;
    //     rString = this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    //   }
    //   var doughnut = { label: this.category[b], value: amount, color: '#' + rString }
    //   var single = { category: this.category[b], services: item, totalAmount: amount }
    //   this.categorised.push(single)
    // }

    this.budgetDetail.serviceId = data.serviceId;
    this.budgetDetail.unitPrice = data.price;
    this.budgetDetail.quantityRequested = qty;
    this.budgetDetail.totalPrice = data.price * qty;
    this.budgetDetail.totalActualRequested = qty;
    this.budgetDetail.budget = this.budgetEstimate;
    this.budgetDetail.eventSupplierId = Number(this.placeHolder.VendorId);
    var serviceAdded: BudgetDetails = new BudgetDetails(this.budgetDetail.id, this.budgetDetail.eventSupplierId,
      this.budgetDetail.serviceId, this.budgetDetail.budget,
      this.budgetDetail.totalActualRequested, this.budgetDetail.unitPrice,
      this.budgetDetail.totalPrice, this.budgetDetail.quantityRequested)
    this.servicesSelected.push(serviceAdded);
    // this.notify.showInfo('Service added to plan');
    this.saveCreateEventBudget()
  }

  servicesSelected: any[] = []
  selectedServices(data: any, item: any) {
    if (data.target.checked) {
      console.log(item);
      this.budgetDetail.eventSupplierId = item.VendorId;
      this.budgetDetail.serviceId = item.serviceId;
      this.budgetDetail.budget = this.budgetEstimate;
      this.budgetDetail.id = item.id;
      this.budgetDetail.unitPrice = item.rate;
      this.budgetDetail.totalPrice = item.amount;
      this.budgetDetail.totalActualRequested = item.quantity;
      this.budgetDetail.quantityRequested = item.quantity;
      var deleteService = item.id;
      this.deleteService.budgetDetailsId.push(deleteService)
      var serviceAdded: BudgetDetails = new BudgetDetails(
        this.budgetDetail.id, 
        this.budgetDetail.eventSupplierId,
        this.budgetDetail.serviceId, this.budgetDetail.budget,
        this.budgetDetail.totalActualRequested, this.budgetDetail.unitPrice,
        this.budgetDetail.totalPrice, this.budgetDetail.quantityRequested)
      this.servicesSelected.push(serviceAdded);
    }
    else {
      this.servicesSelected.splice(this.servicesSelected.indexOf(item), 1);
      this.deleteService.budgetDetailsId.splice(this.deleteService.budgetDetailsId.indexOf(item.id), 1)
    }

  }
  sendCreateEventBudget() {
    this.spinner.show()
    this.budgeting.sendRequest = true;
    this.budgeting.budgetDetails = this.servicesSelected;
    this.budgeting.budget = this.budgetEstimate;
    this.budgeting.eventId = Number(localStorage.getItem('eventId'))
    this.endpoint.CreateEventBudget(this.budgeting).subscribe((data) => {
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.notify.showSuccess('Budget sent');
        this.getEventBudgetSummary();
        this.servicesSelected = [];
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
    this.budgeting.budget = this.budgetEstimate;
    this.budgeting.sendRequest = false;
    this.budgeting.budgetDetails = this.servicesSelected;
    this.budgeting.eventId = Number(localStorage.getItem('eventId'))
    this.endpoint.CreateEventBudget(this.budgeting).subscribe((data) => {
      this.response = data;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.notify.showSuccess(this.response.responseMsg);
        this.getEventBudgetSummary();
        this.servicesSelected = [];
      }
      else {
        this.servicesSelected = [];
        this.notify.showError(this.response.responseMsg)
      }

    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }

  qty: number[] = [];
  serviceIndex: any;
  serviceQnty(data: any, i: any) {
    this.serviceIndex = i;
    var value = (this.qty.at(i) || 0)
    if (data == '+') {
      value += 1
      this.qty[i] = value
    }
    else if (data == '-' && value != 0) {
      value -= 1
      this.qty[i] = value
    }
  }

  vendorCategories: any
  getVendorCategories() {
    this.spinner.show();
    this.endpoint.getVendorCategories().subscribe((data) => {
      this.response = data;
      this.spinner.hide();
      if (this.response.responseCode == '00') {
        this.vendorCategories = this.response.responseData;
      }
      else {
        this.notify.showError(this.response.responseMsg);
      }
    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }

  vendorCategory: any;
  selectedCat: any;
  foodToggle(data: string, i: any) {
    this.toggle = !this.toggle;
    this.selectedCat = i
    if (this.toggle == true) {

      this.vendorCategory = data;
      this.placeHolder.serviceCategory = data
      this.getVendorByCategory(data)
      this.page = 'list'
    }
  }



  vendorCat = false
  openCategoryModal(content: any) {
    this.vendorCat = true
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
    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }
  detail = ''
  detailPage(data: any) {
    this.placeHolder.VendorId = data.supplierId
    this.placeHolder.serviceVendor = data.vendorName;
    this.placeHolder.vendorImg = data.image[0]
    this.page = 'detail'
    this.getVendorServiceDetail(data.supplierId)
  }

  backToVendors() {
    this.page = 'list'
  }
  ///////// Vendor Detail ////////////////
  vendorDetail: any
  vendorServices: any[] = []
  images: any[] = [];
  carousel: any[] = [];
  getVendorServiceDetail(data: any) {
    this.spinner.show();
    this.endpoint.getVendorServiceDetail(data, this.placeHolder.serviceCategory).subscribe((result) => {
      this.response = result;
      this.spinner.hide()
      if (this.response.responseCode == '00') {
        this.vendorDetail = this.response.responseData;
        this.vendorServices = this.vendorDetail.vendorServices;
        this.carousel = this.vendorDetail.images
      }
      else {
        this.notify.showError(this.response.responseMsg)
      }
    }, (error) => {
      this.notify.showError(error.message);
      this.spinner.hide()
    })
  }

}
