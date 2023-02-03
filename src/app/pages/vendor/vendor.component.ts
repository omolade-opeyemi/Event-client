import { Component, OnInit, Input  } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Vendor } from 'src/app/models/vendors';
import { vendorData } from 'src/app/models/vendors';
import { VendorService } from 'src/app/service/vendor.service';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';



@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  // vendordata = vendorData;
  vendordata:any;

  constructor(private vendorService:VendorService,
    private endpoint: EndpointsService,
    private notify: NotificationService,) { }

  detail=''
  response:any

  ngOnInit(): void {
    this.getServiceByCategory()
  }

  detailPage(){
    this.detail = 'detail'
    this.vendorService.getrequestDetail(this.detail)
  }
  serviceCategories:any
  getServiceByCategory(){    
    this.endpoint.getServiceByCategory('food').subscribe((data)=>{
      this.response = data;
      this.vendordata = this.response.responseData
      console.log(data);

      if(this.response.responseCode == '00'){
        this.serviceCategories = this.response.responseData
      }
      else{
        this.notify.showError(this.response.responseMsg)
      }
    })
  }

}
