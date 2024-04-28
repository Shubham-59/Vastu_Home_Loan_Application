import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { AboutComponent } from './templates/about/about.component';
import { EmiCalculationComponent } from './templates/emi-calculation/emi-calculation.component';
import { EnquiryComponent } from './templates/enquiry/enquiry.component';
import { LocationComponent } from './templates/location/location.component';
import { HomeComponent } from './templates/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogComponent } from './includes/log/log.component';
import { UserLayoutComponent } from './includes/user-layout/user-layout.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SlideMenuComponent } from './includes/slide-menu/slide-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SliderComponent } from './templates/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    AboutComponent,
    EmiCalculationComponent,
    EnquiryComponent,
    LocationComponent,
  
    HomeComponent,
    LogComponent,
    UserLayoutComponent,
    UserHeaderComponent,
    SlideMenuComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
