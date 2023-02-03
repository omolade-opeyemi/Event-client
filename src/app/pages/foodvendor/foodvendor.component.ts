import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/models/vendors';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';




@Component({
  selector: 'app-foodvendor',
  templateUrl: './foodvendor.component.html',
  styleUrls: ['./foodvendor.component.scss']
})
export class FoodvendorComponent implements OnInit {

  vendors: Vendor[] = [];
  filteredVendors: Vendor[] = [];
  constructor(private vendorService: VendorService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private endpoint: EndpointsService,
    private notify: NotificationService
    ) { 
      
    
  }

  response:any

  ngOnInit(): void {
    this.getServiceByCategory()
    
  }
  searchVendor(searchTerm: string) {
    if (searchTerm) {
      this.router.navigateByUrl('food/search/' + searchTerm)
    }
    else if (searchTerm == null || undefined || " ") {
      this.router.navigateByUrl('food')
    }
  }

  something() {
    console.log("a")
  }
  serviceCategories:any
  getServiceByCategory(){    
    this.endpoint.getServiceByCategory('food').subscribe((data)=>{
      this.response = data;
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
