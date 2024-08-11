import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-investor-signup',
  templateUrl: './investor-signup.component.html',
  styleUrls: ['./investor-signup.component.css']
})
export class InvestorSignupComponent implements OnInit {

  
  @ViewChild('firstNameInput')
  firstNameInput!: ElementRef;
  @ViewChild('lastNameInput')
  lastNameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  @ViewChild('citiesLikeToBuyInput') citiesLikeToBuyInput!: ElementRef;
  @ViewChild('propertyCriteriaInput') propertyCriteriaInputInput!: ElementRef;
  @ViewChild('returnLokkingInput') returnLokkingInput!: ElementRef;
  @ViewChild('handlePropertiesPerMonthInput') handlePropertiesPerMonthInput!: ElementRef;
  
   
  
  formData:any = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    citiesLikeToBuy: '',
    propertyCriteria :'',
    returnLokking :'',
    handlePropertiesPerMonth :'',
    buyAndHold:''
};
phoneNumberInputMask = createMask({mask: '(999) 999-9999'});
ngmodalData: any = {};
 
selectedTimeToCloseDeal : string = '';
selectedCloseOnNextDeal : string = '';
constructor(private route: ActivatedRoute, private spinner : NgxSpinnerService, private http : HttpClient, private _toast : NgToastService, private _apiCallServices : ApiCallsService) {}

ngOnInit() {

}

timeToCloseOnDeal = [
  {
      id: 1,
      label: "15-30 days",
      status: true
  },
  {
      id: 2,
      label: "30-60 days",
      status: false
  },
  {
      id: 3,
      label: "60-90 days",
      status: false
  },
  {
      id: 4,
      label: "90 days",
      status: false
  }
];

closeOnNextDeal = [
  {
      id: 1,
      label: "ASAP",
      status: true
  },
  {
      id: 2,
      label: "1 months",
      status: false
  },
  {
      id: 3,
      label: "3 months",
      status: false
  },
  {
      id: 4,
      label: "6+ months",
      status: false
  }
];

selectChangeHandler1(event : any) {
  this.selectedTimeToCloseDeal = event.target.value;
}
selectChangeHandler2(event : any) {
  this.selectedCloseOnNextDeal = event.target.value;
}
// selectChangeHandler3(event : any) {
//   this.selectedSquareFootageOfProperty = event.target.value;
// }


buyholdOrfixdeals: any =[];
purchasePropertes: any = [];
otherServicesCanHelp: any = [];

investorSignupFormData(form: NgForm){

  
  this.spinner.show();

    this.buyholdOrfixdeals = [];
    this.purchasePropertes = [];
    this.otherServicesCanHelp = [];

  console.log(form.value);

  console.log(this.selectedTimeToCloseDeal);
  if (this.selectedTimeToCloseDeal == '') {
      this.selectedTimeToCloseDeal = '15-30 days';
  }

  console.log(this.selectedCloseOnNextDeal);
  if (this.selectedCloseOnNextDeal == '') {
      this.selectedCloseOnNextDeal = 'ASAP';
  }


  // CHECKBOX 1
      if(form.value.buyAndHold == true){
      this.buyholdOrfixdeals.push("Buy and Hold");
    }
    if(form.value.buyAndHold == false){
      this.buyholdOrfixdeals.filter((item: any) => item !== "Buy and Hold");
    }
    if(form.value.fixAndFlip == true){
      this.buyholdOrfixdeals.push("Fix Deals");
    }
    if(form.value.fixAndFlip == false){
      this.buyholdOrfixdeals.filter((item: any) => item !== "Fix Deals");
    }
    this.buyholdOrfixdeals.join(" , ");
  
    console.log(this.buyholdOrfixdeals.join(" , "));


    // CHECKBOX 2

    if(form.value.liquid == true){
      this.purchasePropertes.push("Liquid");
    }
    if(form.value.liquid == false){
      this.purchasePropertes.filter((item: any) => item !== "Liquid");
    }
    if(form.value.borrowCapital == true){
      this.purchasePropertes.push("Borrow Capital");
    }
    if(form.value.borrowCapital == false){
      this.purchasePropertes.filter((item: any) => item !== "Borrow Capital");
    }
    this.purchasePropertes.join(" , ");
  
    console.log(this.purchasePropertes.join(" , "));



    

    // CHECKBOX 3

    if(form.value.findQualifiedContractor == true){
      this.otherServicesCanHelp.push("Find you a qualified contractor");
    }
    if(form.value.findQualifiedContractor == false){
      this.otherServicesCanHelp.filter((item: any) => item !== "Find you a qualified contractor");
    }
    if(form.value.introduceGreatLawyer == true){
      this.otherServicesCanHelp.push("Introduce you to a great Real Estate Lawyer");
    }
    if(form.value.introduceGreatLawyer == false){
      this.otherServicesCanHelp.filter((item: any) => item !== "Introduce you to a great Real Estate Lawyer");
    }

    if(form.value.introduceGreatAgent == true){
      this.otherServicesCanHelp.push("Introduce you to a great Real Estate agent");
    }
    if(form.value.introduceGreatAgent == false){
      this.otherServicesCanHelp.filter((item: any) => item !== "Introduce you to a great Real Estate agent");
    }

    if(form.value.introduceMortageSpecialist == true){
      this.otherServicesCanHelp.push("Introduce you to a mortgage specialist");
    }
    if(form.value.introduceMortageSpecialist == false){
      this.otherServicesCanHelp.filter((item: any) => item !== "Introduce you to a mortgage specialist");
    }
    this.otherServicesCanHelp.join(" , ");
  
    console.log(this.otherServicesCanHelp.join(" , "));

      
form.value.firstName  = this.firstNameInput.nativeElement.value;
form.value.lastName  = this.lastNameInput.nativeElement.value;
form.value.email  = this.emailInput.nativeElement.value;
form.value.phoneNumber  = this.phoneInput.nativeElement.value;
form.value.citiesLikeToBuy  = this.citiesLikeToBuyInput.nativeElement.value;
form.value.propertyCriteria  = this.propertyCriteriaInputInput.nativeElement.value;
form.value.returnLokking  = this.returnLokkingInput.nativeElement.value;
form.value.handlePropertiesPerMonth  = this.handlePropertiesPerMonthInput.nativeElement.value;



    this._apiCallServices.investorFormApi(form.value.firstName, form.value.lastName, form.value.phoneNumber, form.value.email, this.buyholdOrfixdeals.join(" , "), form.value.citiesLikeToBuy, this.purchasePropertes.join(" , "), form.value.propertyCriteria, form.value.returnLokking, this.selectedTimeToCloseDeal, form.value.handlePropertiesPerMonth, this.selectedCloseOnNextDeal,  this.otherServicesCanHelp.join(" , "), ).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
          setTimeout(() => {
              this.spinner.hide();
          }, 1000);
          this._toast.success({detail: "THANK YOU", summary: 'Form successfully submitted', position: 'br'});
          // setTimeout(function () {
          //     window.location.href = '/thank-you'
          // }, 1000);
          setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
        }, 3000);
      } else if (res.status == "error") {
        alert(res.message);
        location.reload;
          setTimeout(() => {
              this.spinner.hide();
              window.location.reload();
          }, 3000);
  
      } else if (res.status == "timeout") {
        alert(res.message);
        location.reload;
          setTimeout(() => {
              this.spinner.hide();
              window.location.reload();
          }, 3000);
  
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
     }else if(form.value.citiesLikeToBuy == ""){
      arrErr.push("What cities do you like to buy in?");
    }else if(form.value.propertyCriteria == ""){
      arrErr.push("What types of property criteria do you require?");
    }else if(form.value.returnLokking == ""){
      arrErr.push("What type of return are you typically looking? (What is your buy formula?)");
    }else if(form.value.handlePropertiesPerMonth == ""){
      arrErr.push("How many properties per month can you handle?");
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
    
  
  
  }, () => console.log("INVESTOR SINGUP FORM SUMBITTED SUCCESSFULLY"))
  }

    




}


//   onSubmit(formData: any) {
//     this.buyholdOrfixdeals = [];

//     this.submitted = true;
//     console.log('Form data:', formData);


//     if(formData.buyAndHold == true){
//       this.buyholdOrfixdeals.push("Buy and Hold");
//     }
//     if(formData.buyAndHold == false){
//       this.buyholdOrfixdeals.filter((item: any) => item !== "Buy and Hold");
//     }
//     if(formData.fixAndFlip == true){
//       this.buyholdOrfixdeals.push("Fix Deals");
//     }
//     if(formData.fixAndFlip == false){
//       this.buyholdOrfixdeals.filter((item: any) => item !== "Fix Deals");
//     }
//     this.buyholdOrfixdeals.join(" , ");
    
// console.log(this.buyholdOrfixdeals);

//   }
