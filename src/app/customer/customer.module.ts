import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StateNodeComponent } from './components/state-node/state-node.component';
import { createCustomElement } from '@angular/elements';
// import { registry } from './graph-node-registry';

@NgModule({
    declarations: [HomeComponent, StateNodeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    providers: [
    ]
})
export class CustomerModule {

    public constructor(injector: Injector) {
        if (!this.isRegistered()) {
            customElements.define('app-state-node', createCustomElement(StateNodeComponent, { injector }));
            // registry();
        }
    }

    public isRegistered(): boolean {
        return document.createElement('app-state-node').constructor !== HTMLElement;
    }
}


