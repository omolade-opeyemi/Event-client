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
   ngOnInit(): void {
  }
  backToDetail(){
    this.detail = 'list'
    this.vendorService.getrequestDetail(this.detail)
 
  }
  
}
