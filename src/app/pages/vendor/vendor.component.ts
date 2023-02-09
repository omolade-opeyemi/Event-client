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

  constructor(private vendorService:VendorService,
    private endpoint: EndpointsService,
    private notify: NotificationService,
    ) { }

  detail=''
  category=''

  response:any

  ngOnInit(): void {
    this.vendorService.category$.subscribe(message =>{this.category = message;
    if(message){
      this.getVendorByCategory(message)
    }});
    
  }


  detailPage(data:any){
    console.log(data);
    this.detail = 'detail'
    this.vendorService.getrequestDetail(this.detail)
    this.vendorService.getVendorDetail(data);
  }
  serviceCategories:any
  vendordata:any;
  getVendorByCategory(data:any){    
    this.endpoint.getVendorByCategory(data).subscribe((data)=>{
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
