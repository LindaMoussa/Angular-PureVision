import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgScrollbarModule } from 'ngx-scrollbar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MobilesolutionComponent } from './mobilesolution/mobilesolution.component';
import { WebsolutionComponent } from './websolution/websolution.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoinusComponent } from './joinus/joinus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientComponent } from './client/client.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    MobilesolutionComponent,
    WebsolutionComponent,
    ContactusComponent,
    JoinusComponent,
    NotfoundComponent,
    ClientComponent,
    DigitalmarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
