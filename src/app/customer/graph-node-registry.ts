import { Cell, Graph, Shape } from '@antv/x6';

export function registry(): void {
    Graph.registerHTMLComponent('state-node', {
        render: (node: Cell) => {
            // tslint:disable-next-line: prefer-immediate-return
            let activity: HTMLElement = document.createElement('app-state-node');
            return activity;
        },
        // tslint:disable-next-line: arrow-return-shorthand
        shouldComponentUpdate: (node: Cell) => {
            return false;
        }
    });
}