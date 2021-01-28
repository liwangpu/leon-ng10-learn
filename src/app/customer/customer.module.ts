import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StateStoreModule } from '../state-store';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        StateStoreModule
    ],
    providers: [
    ]
})
export class CustomerModule { }
