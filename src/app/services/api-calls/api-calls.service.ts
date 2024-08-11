import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private apiKey = '5ff0fedbab61462d958d31c234c6a31f';

  constructor(private http: HttpClient) { }
  
  // rootURL3 = "https://red-violet-horse-cape.cyclic.app/";  
  // rootURL3 = "https://35.183.221.88:3000/";
    rootURL3 = "https://api.michaelthehomebuyer.ca/"
    
  contactLeadApi( firstName: string,  lastName: string, email: string, phoneNumber: string, streetAddress: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "/i-buy-ugly-house/contact", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      streetAddress: streetAddress,
      leadSource: "I Buy Ugly House Contact Form"
    }).pipe(catchError(this.errorHandler));
  }

  contactLeadFullFormApi( firstName: string,  lastName: string, email: string, phoneNumber: string, streetAddress: string,ownedProperty: string, sizeProperty: string, numberOfBedroom: string, numberOfBathroom: string, desiredSellingPrice: string, 
    currentCondition: string, motiveSellProperty: string, propertyType: string, sellingTimeline: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "/i-buy-ugly-house/contact", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      streetAddress: streetAddress,
      ownedProperty: ownedProperty,
      sizeProperty: sizeProperty,
      numberOfBedroom: numberOfBedroom,
      numberOfBathroom: numberOfBathroom,
      desiredSellingPrice: desiredSellingPrice,
      currentCondition:currentCondition,
      motiveSellProperty: motiveSellProperty,
      propertyType: propertyType,
      sellingTimeline: sellingTimeline,
      leadSource: "I Buy Ugly House Contact Form"
    }).pipe(catchError(this.errorHandler));
  }


feedbackFormApi( firstName: string,  lastName: string, phoneNumber: string, email: string, comments: string, requestRespond: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "/i-buy-ugly-house/feedback", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      comments: comments,
      requestRespond:requestRespond
    }).pipe(catchError(this.errorHandler));
  }

  getFaqDataFromPodio(id: string): Observable<any> {
    return this.http.get<any>(this.rootURL3 + "michael-the-home-buyer/faqs/"+ id).pipe(catchError(this.errorHandler));
  }

  investorFormApi( firstName: string,  lastName: string, phoneNumber: string, email: string, buyholdOrfixdeals: string, citiesLikeToBuy: string, purchasePropertes: string, propertyCriteria: string, returnLokking:string, selectedTimeToCloseDeal:string, handlePropertiesPerMonth: string, selectedCloseOnNextDeal: string, otherServicesCanHelp: string ): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "michael-the-home-buyer/investor-signup-form", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      buyholdOrfixdeals: buyholdOrfixdeals,
      citiesLikeToBuy:citiesLikeToBuy,
      purchasePropertes:purchasePropertes,
      propertyCriteria: propertyCriteria, 
      returnLokking:returnLokking,
      selectedTimeToCloseDeal:selectedTimeToCloseDeal, 
      handlePropertiesPerMonth: handlePropertiesPerMonth, 
      selectedCloseOnNextDeal: selectedCloseOnNextDeal,
       otherServicesCanHelp: otherServicesCanHelp

    }).pipe(catchError(this.errorHandler));
  }


  
  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
