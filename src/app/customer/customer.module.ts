import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [HomeComponent, CardComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    providers: [
    ]
})
export class CustomerModule { }
