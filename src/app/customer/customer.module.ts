import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PanelComponent } from './components/panel/panel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridComponent } from './components/grid/grid.component';
import { LoggerComponent } from './components/logger/logger.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [HomeComponent, CardComponent, PanelComponent, TabsComponent, GridComponent, LoggerComponent],
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
