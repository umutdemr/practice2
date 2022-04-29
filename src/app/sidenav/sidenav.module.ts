import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';


@NgModule({
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ],
    imports: [
        CommonModule,
        SidenavRoutingModule,
      MatIconModule
    ]
})
export class SidenavModule { }
