import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { SliderComponent } from './admin/slider/slider.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { AboutusComponent } from './admin/aboutus/aboutus.component';
import { OurservicesComponent } from './admin/ourservices/ourservices.component';
import { OurproductComponent } from './admin/ourproduct/ourproduct.component';
import { EventsComponent } from './admin/events/events.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SwiperModule } from 'swiper/angular';
import { ViewportComponent } from './admin/viewport/viewport.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryComponent } from './admin/enquiry/enquiry.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { TrainingComponent } from './admin/training/training.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    OurservicesComponent,
    OurproductComponent,
    EventsComponent,
    ContactusComponent,
    ViewportComponent,
    EnquiryComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    SwiperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,


    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
