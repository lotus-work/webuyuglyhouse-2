import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  @ViewChild('firstNameInput')
  firstNameInput!: ElementRef;
  @ViewChild('lastNameInput')
  lastNameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  @ViewChild('commentsInput') commentsInput!: ElementRef;
  
  formData:any = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comments: '',
    requestRespond :''
};
constructor(private route: ActivatedRoute, private spinner : NgxSpinnerService, private http : HttpClient, private _toast : NgToastService, private _apiCallServices : ApiCallsService) {}
phoneNumberInputMask = createMask({mask: '(999) 999-9999'});



feedbackFormData(form: NgForm) {
console.log(form.value);

var requestRespondVal = "No";

if(form.value.requestRespond == true){
  requestRespondVal  = "Yes"
}else{
  requestRespondVal = "No"
}

this.spinner.show();

console.log(form.value);

form.value.firstName  = this.firstNameInput.nativeElement.value;
form.value.lastName  = this.lastNameInput.nativeElement.value;
form.value.email  = this.emailInput.nativeElement.value;
form.value.phoneNumber  = this.phoneInput.nativeElement.value;
form.value.comments  = this.commentsInput.nativeElement.value;


this._apiCallServices.feedbackFormApi(form.value.firstName, form.value.lastName, form.value.phoneNumber, form.value.email, form.value.comments, requestRespondVal).subscribe(res => {
    console.log(res);
    if (res.status == "success") {
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
        this._toast.success({detail: "THANK YOU", summary: 'Feedback successfully submitted', position: 'br'});
        // setTimeout(function () {
        //     window.location.href = '/thank-you'
        // }, 1000);
        setTimeout(() => {
          this.spinner.hide();
          window.location.reload();
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
   }else if(form.value.comments == ""){
    arrErr.push("Tell us about your experience");
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
  


}, () => console.log("FEEDBACK FORM SUMBITTED SUCCESSFULLY"))
}

}
