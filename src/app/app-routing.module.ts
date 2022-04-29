import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomersComponent} from "./customers/customers.component";
import {MessageComponent} from "./message/message.component";
import {CvComponent} from "./cv/cv.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  { path: 'sidenav', loadChildren: () => import('./sidenav/sidenav.module').then(m => m.SidenavModule) },
  {
    path:'/', component:DashboardComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'cv', component:CvComponent
  },
  {
    path:'customers', component:CustomersComponent
  },
  {
    path:'message', component:MessageComponent
  },
  {
    path:'calendar', component:CalendarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
