import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { TrackjourneyComponent } from './trackjourney/trackjourney.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    TrackjourneyComponent,
    CancelticketComponent,
    PaymentpageComponent,
    CardComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"homepage",component:HomeComponent},
      {path:"registration",component:RegistrationComponent},
      {path:"signup",component:SignupComponent},
      // {path:'',redirectTo:'/homepage',pathMatch:'full'},
      {path:"trackjourney",component:TrackjourneyComponent},
      {path:"cancelticket",component:CancelticketComponent},
      {path:"card",component:CardComponent},
      {path:"paymentpage",component:PaymentpageComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }