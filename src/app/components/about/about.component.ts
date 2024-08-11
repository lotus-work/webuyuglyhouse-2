import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
import { NgToastService } from 'ng-angular-popup';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

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

            // alert('An error occurred. Please try after sometime!');
            
            var errMsg = "";
            var arrErr = [];
            if(form.value.firstName == ""){
              arrErr.push("First Name");
            }else if(form.value.lastName == ""){
              arrErr.push("Last Name");
            }else if(form.value.email == ""){
              arrErr.push("Email");
            }else if(form.value.phoneNumber == ""){
              arrErr.push("Phone Number");
            }else if(form.value.streetAddress == ""){
             arrErr.push("Property Address");
           }else{
              errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
            }
      
            if(arrErr.length == 0)
            {
              errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
            }
            else{
              errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
            }
      
      
              alert(errMsg);

            location.reload;
              setTimeout(() => {
                  this.spinner.hide();
                  window.location.reload();
              }, 1000);
          


        }, () => console.log("CONTACT US FORM SUMBITTED SUCCESSFULLY"))
    }
}

}
