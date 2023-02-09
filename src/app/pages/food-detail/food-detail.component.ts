import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  constructor(private vendorService:VendorService,
    private endpoint: EndpointsService,
    private notify: NotificationService ) { }
  detail=''
  response:any;
  supplierId:any
   ngOnInit(): void {
    this.vendorService.vendorDetail$.subscribe(message => {this.supplierId = message;
        this.getVendorServiceDetail(message)
    })
  }
  vendorDetail:any
  vendorServices:any[] = []
  getVendorServiceDetail(data:any){
    this.endpoint.getVendorServiceDetail(data).subscribe((result)=>{
      this.response = result;
      console.warn(this.response);
      if(this.response.responseCode == '00'){
        this.vendorDetail = this.response.responseData;
        this.vendorServices = this.vendorDetail.vendorServices
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    })
  }
  backToDetail(){
    this.detail = 'list'
    this.vendorService.getrequestDetail(this.detail)
 
  }
  
}
