import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ExperienceAndTestComponent } from './components/experience-and-test/experience-and-test.component';
import { PersonalTouchComponent } from './components/personal-touch/personal-touch.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HomeItWorksComponent } from './components/home-it-works/home-it-works.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SpeedAndSimplicityComponent } from './components/speed-and-simplicity/speed-and-simplicity.component';
import { VsTraditionalRealtorsComponent } from './components/vs-traditional-realtors/vs-traditional-realtors.component';
import { VsOnlineBuyersComponent } from './components/vs-online-buyers/vs-online-buyers.component';
import { VsLocalFlippersComponent } from './components/vs-local-flippers/vs-local-flippers.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LocationDeatailsComponent } from './components/location-deatails/location-deatails.component';
import { MapComponent } from './components/map/map.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { InheritedHouseComponent } from './components/inherited-house/inherited-house.component';
import { HouseInDisrepairComponent } from './components/house-in-disrepair/house-in-disrepair.component';
import { FinancialDistressComponent } from './components/financial-distress/financial-distress.component';
import { RetirementDownsizingComponent } from './components/retirement-downsizing/retirement-downsizing.component';
import { SellRentalPropertyComponent } from './components/sell-rental-property/sell-rental-property.component';
import { SellHouseAsIsComponent } from './components/sell-house-as-is/sell-house-as-is.component';
import { CashHomeBuyersComponent } from './components/cash-home-buyers/cash-home-buyers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-does-it-work', component: HomeItWorksComponent },
  
  { path: 'locations', component:  LocationsComponent},
  
  { path: 'location/:id', component:  LocationDeatailsComponent},
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'company-info', component: AboutComponent },
  // { path: 'map', component: MapComponent },
  { path: 'selling-your-house/i-need-to-sell-my-house-fast', component: SpeedAndSimplicityComponent },
  { path: 'selling-your-house/experience-and-trust', component:  ExperienceAndTestComponent},
  { path: 'selling-your-house/personal-touch', component:  PersonalTouchComponent},
  { path: 'selling-your-house/reviews', component:  ReviewsComponent},

  {path:"seller-resources", component: ResourcesComponent},
  {path:"inherited-house", component: InheritedHouseComponent },
  {path:"why-sell-to-us/house-in-disrepair", component: HouseInDisrepairComponent},
  {path:"financial-distress", component: FinancialDistressComponent},
  {path:"retirement-downsizing", component: RetirementDownsizingComponent },
  {path:"why-sell-to-us/rental-property", component: SellRentalPropertyComponent },
  {path:"sell-house-as-is", component: SellHouseAsIsComponent },
  {path:"cash-home-buyers", component: CashHomeBuyersComponent },
  
  { path: 'mobile-tos', component:  TermsOfServiceComponent},
  { path: 'privacy-policy', component:  PrivacyPolicyComponent},
  { path: 'terms-of-use', component:  TermsOfUseComponent},

  { path: 'home-buyers-still-open', component:  TermsOfUseComponent},
  { path: 'micheal-the-home-buyer-vs-traditional-realtors', component:  VsTraditionalRealtorsComponent},
  { path: 'micheal-the-home-buyer-vs-online-buyers', component:  VsOnlineBuyersComponent},
  { path: 'micheal-the-home-buyer-vs-local-flippers', component:  VsLocalFlippersComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'thank-you', component:  ThankYouComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
