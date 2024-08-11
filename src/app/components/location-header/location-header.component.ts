import {
  Component, Input, OnInit
}
from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Address
}
from 'ngx-google-places-autocomplete/objects/address';
@Component({
  selector: 'app-location-header',
  templateUrl: './location-header.component.html',
  styleUrls: ['./location-header.component.css']
})
export class LocationHeaderComponent implements OnInit {
  @Input() heading: string | undefined;
  @Input() subheading: string | undefined;

  options:any = {
      componentRestrictions: {
          country: 'CA'
      }
  }
  fullAddress: string = "";
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit():void {}


  handleAddressChange(address : Address) {
      this.fullAddress = address.formatted_address;

  }
  saveAddress() {
      sessionStorage.setItem('user_street_address', this.fullAddress);
      // Set session expiration time (5 minutes = 300 seconds)
      const expirationTime = new Date().getTime() + 300000;
      sessionStorage.setItem('session_expiration', expirationTime.toString());

      
      this.router.navigate(['/contact']);
  }
}
