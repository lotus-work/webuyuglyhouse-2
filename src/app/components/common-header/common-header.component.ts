import {
    Component, Input, OnInit,  ElementRef, ViewChild
}
from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Address
}
from 'ngx-google-places-autocomplete/objects/address';

@Component({ selector: 'app-common-header', templateUrl: './common-header.component.html', styleUrls: ['./common-header.component.css'] }) export class CommonHeaderComponent implements OnInit {
    @Input() heading: string | undefined;
    @Input() subheading: string | undefined;
    @ViewChild('inputField')
    inputField!: ElementRef;


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
        
        const inputValue = this.inputField.nativeElement.value;
        if(this.fullAddress == "")
        {
           this.fullAddress = inputValue; 
        }
        console.log('Input Value:', inputValue);
        sessionStorage.setItem('user_street_address', this.fullAddress);
        // Set session expiration time (5 minutes = 300 seconds)
        const expirationTime = new Date().getTime() + 300000;
        sessionStorage.setItem('session_expiration', expirationTime.toString());

        
        this.router.navigate(['/contact']);
    }

    
}
