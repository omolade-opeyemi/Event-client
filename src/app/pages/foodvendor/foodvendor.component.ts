import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/models/vendors';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


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
    private router: Router) { 
      
    
  }

  ngOnInit(): void {
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

}
