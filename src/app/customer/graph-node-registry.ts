import { Cell, Graph, Shape } from '@antv/x6';

export function registry(): void {



    Graph.registerHTMLComponent('state-node', {
        render: (node: Cell) => {
            let activity: HTMLElement = document.createElement('app-state-node');

            activity.addEventListener('customEvt', () => {
                node.notify('node:testEvent', { node });
            });
            // console.log('render:', node);
            return activity;
        },
        shouldComponentUpdate: (node: Cell) => {
            return false;
        }
    });





}