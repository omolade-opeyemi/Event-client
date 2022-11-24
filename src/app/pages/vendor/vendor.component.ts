import { Component, OnInit, Input  } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Vendor } from 'src/app/models/vendors';
import { vendorData } from 'src/app/models/vendors';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendordata = vendorData;
  constructor(private vendorService:VendorService) { }

  detail=''
  ngOnInit(): void {
  }

  detailPage(){
    this.detail = 'detail'
    this.vendorService.getrequestDetail(this.detail)
  }

}
