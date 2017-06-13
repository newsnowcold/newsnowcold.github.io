import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// No routing just 1 page
// import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MyServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ContactUsComponent
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
