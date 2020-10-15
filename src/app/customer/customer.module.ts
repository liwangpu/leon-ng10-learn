import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MirrorGanttModule } from '@cxist/mirror-gantt';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MirrorGanttModule
    ],
    providers: [
    ]
})
export class CustomerModule { }
