import {
    HttpClient
}
from '@angular/common/http';
import {
    Component, OnInit, AfterViewInit, ViewChild, ElementRef
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
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({ selector: 'app-contact', templateUrl: './contact.component.html', styleUrls: ['./contact.component.css'] }) export class ContactComponent {
    @ViewChild('firstNameInput')
    firstNameInput!: ElementRef;
    @ViewChild('lastNameInput')
    lastNameInput!: ElementRef;
    @ViewChild('emailInput') emailInput!: ElementRef;
    @ViewChild('phoneInput') phoneInput!: ElementRef;
    @ViewChild('addressInput') addressInput!: ElementRef;


  @ViewChild('ownedPropertyInput') ownedPropertyInput!: ElementRef;
  @ViewChild('sizePropertyInput') sizePropertyInput!: ElementRef;
  @ViewChild('numberOfBedroomInput') numberOfBedroomInput!: ElementRef;
  @ViewChild('numberOfBathroomInput') numberOfBathroomInput!: ElementRef;
  @ViewChild('desiredSellingPriceInput') desiredSellingPriceInput!: ElementRef;
  @ViewChild('currentConditionInput') currentConditionInput!: ElementRef;
  @ViewChild('motiveSellPropertyInput') motiveSellPropertyInput!: ElementRef;


    @ViewChild('myForm') myForm: any;
  
    sessionFullStreetAddress: any;
    isCheckboxChecked: boolean = false;
    options:any = {
        componentRestrictions: {
            country: 'CA'
        }
    }
    formData:any = {
        sessionFullStreetAddress: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        confirm: false
    };


    formData2: any = {
      ownedProperty: '',
      sizeProperty: '',
      numberOfBedroom: '',
      numberOfBathroom: '',
      desiredSellingPrice: '',
      currentCondition: '',
      motiveSellProperty: ''
    };

    selectedPropertyType: string = '';
    propertyType = [
      {
        id: 1,
        label: "Detached",
        status: true
      },
      {
        id: 2,
        label: "Semi-detached",
        status: false
      },
      {
        id: 3,
        label: "Townhouses",
        status: false
      },
      {
        id: 4,
        label: "Condos",
        status: false
      },
      {
        id: 5,
        label: "Condo Townhomes",
        status: false
      },
      {
        id: 6,
        label: "Bungalows",
        status: false
      }
      ,
      {
        id: 7,
        label: "Split-level",
        status: false
      }
      ,
      {
        id: 8,
        label: "Duplex, Triplex, Fourplex",
        status: false
      },
      {
        id: 9,
        label: "Others",
        status: false
      }
    ];
    selectChangeHandler1(event: any) {
      this.selectedPropertyType = event.target.value;
    }
  
    selectedSellingTimeline: string = '';
    sellingTimeline = [
      {
        id: 1,
        label: "Immediate Sale",
        status: true
      },
      {
        id: 2,
        label: "Within the Next 3 Months",
        status: false
      },
      {
        id: 3,
        label: "Within the Next 6 Months",
        status: false
      },
      {
        id: 4,
        label: "Within the Next Year",
        status: false
      },
      {
        id: 5,
        label: "Flexible Timeline",
        status: false
      },
      {
        id: 6,
        label: "Dependent on Finding a New Home",
        status: false
      }
      ,
      {
        id: 7,
        label: "Seasonal Considerations",
        status: false
      }
      ,
      {
        id: 8,
        label: "Financial Milestone",
        status: false
      }
    ];
    selectChangeHandler2(event: any) {
      this.selectedSellingTimeline = event.target.value;
    }

    currencyInputMask = createMask({
      alias: 'numeric',
      groupSeparator: ',',
      digits: 0,
      digitsOptional: false,
      placeholder: '0',
    });
  
  
    numericInputMask = createMask({
      alias: 'numeric',
      groupSeparator: ',',
      digits: 0,
      digitsOptional: false,
      placeholder: '0',
    });
  
    numericDecimalInputMask = createMask({
      alias: 'numeric',
      groupSeparator: ',',
      digits: 0,
      digitsOptional: false,
      placeholder: '0',
    });
  isVisibleForm1: boolean = true;
  isVisibleForm2: boolean = false;
  progressWidth: number = 50;
  step: number = 1;

    isButtonDisabled: boolean = false;

    constructor(private route: ActivatedRoute, private spinner : NgxSpinnerService, private http : HttpClient, private _toast : NgToastService, private _apiCallServices : ApiCallsService) {}
    phoneNumberInputMask = createMask({mask: '(999) 999-9999'});
    handleAddressChange(address : Address) {
        this.formData.sessionFullStreetAddress = address.formatted_address;

    }
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

    // contactFormData(form: NgForm) {
    //     if(form.valid && this.formData.confirm) {
            
    //         this.spinner.show();

    //         console.log(form.value);

    //         form.value.firstName  = this.firstNameInput.nativeElement.value;
    //         form.value.lastName  = this.lastNameInput.nativeElement.value;
    //         form.value.email  = this.emailInput.nativeElement.value;
    //         form.value.phoneNumber  = this.phoneInput.nativeElement.value;
    //         form.value.streetAddress  = this.addressInput.nativeElement.value;

    //         this._apiCallServices.contactLeadApi(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.streetAddress).subscribe(res => {
    //             console.log(res);
    //             if (res.status == "success") {
    //                 setTimeout(() => {
    //                     this.spinner.hide();
    //                 }, 1000);
    //                 this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
    //                 // setTimeout(function () {
    //                 //     window.location.href = '/thank-you'
    //                 // }, 1000);
    //             } else if (res.status == "error") {
    //               alert(res.message);
    //             //   location.reload;
    //             //     setTimeout(() => {
    //             //         this.spinner.hide();
    //             //         window.location.reload();
    //             //     }, 1000);
    
    //             } else if (res.status == "timeout") {
    //               alert(res.message);
    //             //   location.reload;
    //             //     setTimeout(() => {
    //             //         this.spinner.hide();
    //             //         window.location.reload();
    //             //     }, 1000);
    
    //             }
    
    
    //         }, err => {
    //            // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });
    

    //            var errMsg = "";
    //            var arrErr = [];
    //            if(form.value.firstName == ""){
    //              arrErr.push("First Name");
    //            }else if(form.value.lastName == ""){
    //              arrErr.push("Last Name");
    //            }else if(form.value.email == ""){
    //              arrErr.push("Email");
    //            }else if(form.value.phoneNumber == ""){
    //              arrErr.push("Phone Number");
    //            }else if(form.value.streetAddress == ""){
    //             arrErr.push("Property Address");
    //           }else{
    //              errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
    //            }
         
    //            if(arrErr.length == 0)
    //            {
    //              errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
    //            }
    //            else{
    //              errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
    //            }
         
         
    //              alert(errMsg);
                 
    //             location.reload;
    //               setTimeout(() => {
    //                   this.spinner.hide();
    //                   window.location.reload();
    //               }, 1000);
              
    
    
    //         }, () => console.log("CONTACT US FORM SUMBITTED SUCCESSFULLY"))
    //     }
    // }

    // submitForm(addressVal: string){
    //     const formData = {
    //         firstName: this.myForm.form.controls['firstName'].value,
    //         lastName: this.myForm.form.controls['lastName'].value,
    //         address: this.myForm.form.controls['address'].value,
    //         phone: this.myForm.form.controls['phone'].value,
    //         email: this.myForm.form.controls['email'].value,
    //       };

    //       if(formData.firstName =="")
    //       {
    //         alert("Field empty firstname. Please fill.")
    //       }
    //       else if(formData.lastName =="")
    //       {
    //         alert("Field empty lastName. Please fill.")
    //       }else if(formData.phone =="")
    //       {
    //        alert("Field empty phone. Please fill.")
    //       }else if(formData.address =="")
    //       {
    //        alert("Field empty address. Please fill.")
    //       }else if(formData.email =="")
    //       {
    //        alert("Field empty email. Please fill.")
    //       }

    //       // Display or process the form data as needed
    //       console.log(formData);
    //       console.log(addressVal);

    //       this._apiCallServices.contactLeadApi(formData.firstName, formData.lastName, formData.email, formData.phone, addressVal).subscribe(res => {
    //         console.log(res);
    //         if (res.status == "success") {
    //             setTimeout(() => {
    //                 this.spinner.hide();
    //             }, 1000);
    //             this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
    //             setTimeout(function () {
    //                 window.location.href = '/thank-you'
    //             }, 1000);
    //         } else if (res.status == "error") {
    //           alert(res.message);
    //           location.reload;
    //             setTimeout(() => {
    //                 this.spinner.hide();
    //                 window.location.reload();
    //             }, 1000);

    //         } else if (res.status == "timeout") {
    //           alert(res.message);
    //           location.reload;
    //             setTimeout(() => {
    //                 this.spinner.hide();
    //                 window.location.reload();
    //             }, 1000);

    //         }


    //     }, err => {
    //        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });


    //     //    var errMsg = "";
    //     //    var arrErr = [];
    //     //    if(form.value.firstName == ""){
    //     //      arrErr.push("First Name");
    //     //    }else if(form.value.lastName == ""){
    //     //      arrErr.push("Last Name");
    //     //    }else if(form.value.email == ""){
    //     //      arrErr.push("Email");
    //     //    }else if(form.value.phoneNumber == ""){
    //     //      arrErr.push("Phone Number");
    //     //    }else if(form.value.streetAddress == ""){
    //     //     arrErr.push("Property Address");
    //     //   }else{
    //     //      errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
    //     //    }
     
    //     //    if(arrErr.length == 0)
    //     //    {
    //     //      errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
    //     //    }
    //     //    else{
    //     //      errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
    //     //    }
     
     
    //          alert("Unable to submit form");
             
    //         location.reload;
    //           setTimeout(() => {
    //               this.spinner.hide();
    //               window.location.reload();
    //           }, 1000);
          


    //     }, () => console.log("CONTACT US FORM SUMBITTED SUCCESSFULLY"))
    // }


showPre() {
    const bar = document.getElementById('progress-bar');

    if (bar != null) {
      bar.style.setProperty('width', '50%');
    }
    this.progressWidth = 50;
    this.step = 1;
    this.isVisibleForm1 = true;
    this.isVisibleForm2 = false;
  }
  showNext(form: NgForm) {


    this._apiCallServices.contactLeadApi(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.streetAddress).subscribe(res => {
         console.log(res);
         if (res.status == "success") {
             setTimeout(() => {
                 this.spinner.hide();
             }, 1000);

             const bar = document.getElementById('progress-bar');

             if (bar != null) {
               bar.style.setProperty('width', '100%');
             }
             this.step = 2;
             this.progressWidth = 100;
             
             this.isVisibleForm1 = false;
             this.isVisibleForm2 = true;
             
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

  form2Data(form: NgForm){
   
    this.spinner.show();

   this.formData2.ownedProperty  = this.ownedPropertyInput.nativeElement.value;
   this.formData2.sizeProperty  = this.sizePropertyInput.nativeElement.value;
   this.formData2.numberOfBedroom  = this.numberOfBedroomInput.nativeElement.value;
   this.formData2.numberOfBathroom  = this.numberOfBathroomInput.nativeElement.value;
   this.formData2.desiredSellingPrice  = this.desiredSellingPriceInput.nativeElement.value;
   this.formData2.currentCondition  = this.currentConditionInput.nativeElement.value;
   this.formData2.motiveSellProperty  = this.motiveSellPropertyInput.nativeElement.value;
  //  this.selectedPropertyType, this.selectedSellingTimeline


   form.value.firstName  = this.firstNameInput.nativeElement.value;
   form.value.lastName  = this.lastNameInput.nativeElement.value;
   form.value.email  = this.emailInput.nativeElement.value;
   form.value.phoneNumber  = this.phoneInput.nativeElement.value;
   form.value.streetAddress  = this.addressInput.nativeElement.value;

   this._apiCallServices.contactLeadFullFormApi(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.streetAddress,this.formData2.ownedProperty, this.formData2.sizeProperty,
    this.formData2.numberOfBedroom, this.formData2.numberOfBathroom, this.formData2.desiredSellingPrice, this.formData2.currentCondition, this.formData2.motiveSellProperty, this.selectedPropertyType, this.selectedSellingTimeline).subscribe(res => {
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
