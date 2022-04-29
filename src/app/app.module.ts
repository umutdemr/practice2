import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidenavModule} from "./sidenav/sidenav.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { MessageComponent } from './message/message.component';
import { CvComponent } from './cv/cv.component';
import { CalendarComponent } from './calendar/calendar.component';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    MessageComponent,
    CvComponent,
    CalendarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SidenavModule,
        BrowserAnimationsModule,
      RouterModule,


    ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
