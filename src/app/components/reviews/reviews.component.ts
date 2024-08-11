import {
    HttpClient
}
from '@angular/common/http';
import {
    Component, Input, OnInit
}
from '@angular/core';
import {
    ActivatedRoute
}
from '@angular/router';
import {
    createMask
}
from '@ngneat/input-mask';
import {
    NgForm
}
from '@angular/forms';
import {
    NgToastService
}
from 'ng-angular-popup';
import {
    NgxSpinnerService
}
from 'ngx-spinner';
import {
    Address
}
from 'ngx-google-places-autocomplete/objects/address';

import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';
@Component({ selector: 'app-reviews', templateUrl: './reviews.component.html', styleUrls: ['./reviews.component.css'] }) 
export class ReviewsComponent {

    options:any = {
        componentRestrictions: {
            country: 'CA'
        }
    }

    sessionFullStreetAddress: any;
    isCheckboxChecked: boolean = false;

    formData:any = {
        sessionFullStreetAddress: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        confirm: false
    };

    constructor(private route: ActivatedRoute, private spinner : NgxSpinnerService, private http : HttpClient, private _toast : NgToastService, private _apiCallServices : ApiCallsService) {}
    phoneNumberInputMask = createMask({mask: '(999) 999-9999'});

    ngOnInit() {
        const expirationTime = sessionStorage.getItem('session_expiration');
        if(!expirationTime || new Date().getTime() > parseInt(expirationTime, 10)) {
            // Session has expired, or the expiration time is not set
            this.sessionFullStreetAddress = null;
        }
        else {
            this.sessionFullStreetAddress = sessionStorage.getItem('user_street_address');

            this.formData.sessionFullStreetAddress = this.sessionFullStreetAddress;
        }

        console.log(this.sessionFullStreetAddress);
    }
    
    
    handleAddressChange(address : Address) {
      this.formData.sessionFullStreetAddress = address.formatted_address;

  }
    contactFormData(form: NgForm) {
        if(form.valid && this.formData.confirm) {
            
            this.spinner.show();

            console.log(form.value);
            this._apiCallServices.contactLeadApi(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.streetAddress).subscribe(res => {
                console.log(res);
                if (res.status == "success") {
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 1000);
                    this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
                    setTimeout(function () {
                        window.location.href = '/thank-you'
                    }, 1000);
                } else if (res.status == "error") {
                  alert(res.message);
                  location.reload;
                    setTimeout(() => {
                        this.spinner.hide();
                        window.location.reload();
                    }, 1000);
    
                } else if (res.status == "timeout") {
                  alert(res.message);
                  location.reload;
                    setTimeout(() => {
                        this.spinner.hide();
                        window.location.reload();
                    }, 1000);
    
                }
    
    
            }, err => {
               // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });
    
                alert('An error occurred. Please try after sometime!');
                location.reload;
                  setTimeout(() => {
                      this.spinner.hide();
                      window.location.reload();
                  }, 1000);
              
    
    
            }, () => console.log("CONTACT US FORM SUMBITTED SUCCESSFULLY"))
        }
    }

}
