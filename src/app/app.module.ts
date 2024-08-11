import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeItWorksComponent } from './components/home-it-works/home-it-works.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DoNotMailComponent } from './components/do-not-mail/do-not-mail.component';
import { SpeedAndSimplicityComponent } from './components/speed-and-simplicity/speed-and-simplicity.component';
import { ExperienceAndTestComponent } from './components/experience-and-test/experience-and-test.component';
import { PersonalTouchComponent } from './components/personal-touch/personal-touch.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LocationsComponent } from './components/locations/locations.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReviewsCarousalComponent } from './components/reviews-carousal/reviews-carousal.component';
import { VsTraditionalRealtorsComponent } from './components/vs-traditional-realtors/vs-traditional-realtors.component';
import { VsOnlineBuyersComponent } from './components/vs-online-buyers/vs-online-buyers.component';
import { VsLocalFlippersComponent } from './components/vs-local-flippers/vs-local-flippers.component'; // Import FormsModule
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { InputMaskModule } from '@ngneat/input-mask';
import { NgToastModule } from 'ng-angular-popup';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LocationHeaderComponent } from './components/location-header/location-header.component';
import { NgxPaginationModule } from "ngx-pagination";
import { LocationDeatailsComponent } from './components/location-deatails/location-deatails.component';
import { MapComponent } from './components/map/map.component';
import { SubFooterContactInfoComponent } from './components/sub-footer-contact-info/sub-footer-contact-info.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { InheritedHouseComponent } from './components/inherited-house/inherited-house.component';
import { HouseInDisrepairComponent } from './components/house-in-disrepair/house-in-disrepair.component';
import { FinancialDistressComponent } from './components/financial-distress/financial-distress.component';
import { RetirementDownsizingComponent } from './components/retirement-downsizing/retirement-downsizing.component';
import { SellRentalPropertyComponent } from './components/sell-rental-property/sell-rental-property.component';
import { SellHouseAsIsComponent } from './components/sell-house-as-is/sell-house-as-is.component';
import { CashHomeBuyersComponent } from './components/cash-home-buyers/cash-home-buyers.component';


const CLIENT_ID ="1077908882481-2c2hgj56b5m9rkfoirtd56c0ln05ct48.apps.googleusercontent.com";

@NgModule({
  declarations: [
    AppComponent,
    HomeItWorksComponent,
    FaqsComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    TermsOfServiceComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    DoNotMailComponent,
    SpeedAndSimplicityComponent,
    ExperienceAndTestComponent,
    PersonalTouchComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReviewsComponent,
    LocationsComponent,
    ReviewsCarousalComponent,
    VsTraditionalRealtorsComponent,
    VsOnlineBuyersComponent,
    VsLocalFlippersComponent,
    ThankYouComponent,
    LocationHeaderComponent,
    LocationDeatailsComponent,
    MapComponent,
    SubFooterContactInfoComponent,
    ResourcesComponent,
    InheritedHouseComponent,
    HouseInDisrepairComponent,
    FinancialDistressComponent,
    RetirementDownsizingComponent,
    SellRentalPropertyComponent,
    SellHouseAsIsComponent,
    CashHomeBuyersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgToastModule ,
    GooglePlaceModule,
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
