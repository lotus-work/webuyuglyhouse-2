import {
  Component, Input, OnInit,  ElementRef, ViewChild
}
from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Address
}
from 'ngx-google-places-autocomplete/objects/address';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() heading: string | undefined;
  @Input() subheading: string | undefined;
  @ViewChild('inputField')
  inputField!: ElementRef;
  showNav: boolean = false;

  options:any = {
      componentRestrictions: {
          country: 'CA'
      }
  }
  fullAddress: string = "";
  constructor(private router: Router,private route: ActivatedRoute,private el: ElementRef) { }
  ngOnInit():void {
    window.addEventListener('scroll', this.scroll, true)
  }

  
  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 150;
    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 250;
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
     scrollHeigth = 350;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 500;
    }else{
      scrollHeigth = 650;
    }
 
     if(window.scrollY >= scrollHeigth){
       
      this.showNav = true;
       
     }else if(window.scrollY < scrollHeigth){
      this.showNav = false;
     }
   }

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

  openNav() {
    this.el.nativeElement.querySelector('#mySidenav').style.width = '250px';
    // this.el.nativeElement.querySelector('#main').style.marginLeft = '250px';
  }

  closeNav() {
    this.el.nativeElement.querySelector('#mySidenav').style.width = '0';
    // this.el.nativeElement.querySelector('#main').style.marginLeft = '0';
  }
}
