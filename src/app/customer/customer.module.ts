import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Cell, Graph, Shape, } from '@antv/x6';

@NgModule({
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    providers: [
    ]
})
export class CustomerModule {

    constructor() {
        // window['mirrorFlowEventListenner'] = new Map<string,>();

        Graph.registerHTMLComponent('state-node', {
            render: (node: Cell) => {
                console.log('node render:', node);
                let { title, content } = node.getData() || {};
                let activity: HTMLElement = document.createElement('mirror-element-state-activity');
                activity.title = title;
                (activity as any).content = content;
                activity.addEventListener('onDelete', () => {
                    console.log('on delete');
                });

                activity.addEventListener('onActive', () => {
                    console.log('on active');
                });

                return activity;
            },
            shouldComponentUpdate: (node: Cell) => {
                // console.log('ask update');
                return node.hasChanged('data');
            }
        });
    }
}


