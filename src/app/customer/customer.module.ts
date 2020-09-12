import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PanelComponent } from './components/panel/panel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
    declarations: [HomeComponent, CardComponent, PanelComponent, TabsComponent, GridComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    providers: [
    ]
})
export class CustomerModule { }
