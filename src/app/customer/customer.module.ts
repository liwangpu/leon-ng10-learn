import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoggerComponent } from './components/logger/logger.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AComponent } from './components/a/a.component';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { BComponent } from './components/b/b.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { TopComponent } from './components/top/top.component';

@NgModule({
    declarations: [HomeComponent, LoggerComponent, AComponent, A1Component, A2Component, BComponent, B1Component, B2Component, TopComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatCheckboxModule
    ],
    providers: [
    ]
})
export class CustomerModule { }
