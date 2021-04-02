import { Cell, Graph, Shape } from '@antv/x6';

export function registry(): void {
    Graph.registerHTMLComponent('startup-node', {
        render: (node: Cell) => {
            let activity: HTMLElement = document.createElement('mirror-element-startup-activity');
            // node
            console.log('startup node render');
            // let attrs = node.getAttrs();

            // attrs.ports = {
            //     groups: {
            //         bottom: {
            //             position: 'bottom',
            //             attrs: {
            //                 circle: {
            //                     r: 4,
            //                     magnet: true,
            //                     stroke: '#31d0c6',
            //                     strokeWidth: 2,
            //                     fill: '#fff'
            //                 }
            //             }
            //         }
            //     },
            //     items: [
            //         {
            //             id: 'bottom_port',
            //             group: 'bottom',
            //         }
            //     ]
            // };
            // node.setAttrs(attrs);

            return activity;
        },
        // tslint:disable-next-line: arrow-return-shorthand
        shouldComponentUpdate: (node: Cell) => {
            return false;
        }
    });

    Graph.registerHTMLComponent('state-node', {
        render: (node: Cell) => {
            // console.log('node render:', node);
            let { title, content } = node.getData() || {};
            let activity: HTMLElement = document.createElement('mirror-element-state-activity');
            activity.title = title;
            (activity as any).content = content;
            return activity;
        },
        // tslint:disable-next-line: arrow-return-shorthand
        shouldComponentUpdate: (node: Cell) => {
            // console.log('ask update');
            return node.hasChanged('data');
        }
    });

    // Shape.HTML.bodyAttr

    const commonPortAttrs: any = {
        circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff'
        }
    };

    // Shape.HTML.config({
    //     shape: 'startup-node',
    //     ports: {
    //         groups: {
    //             bottom: {
    //                 position: 'bottom',
    //                 attrs: commonPortAttrs
    //             }
    //         },
    //         items: [
    //             {
    //                 id: 'bottom_port',
    //                 group: 'bottom',
    //             }
    //         ]
    //     }
    // });

    // Shape.HTML.config({
    //     shape: 'state-node',
    //     ports: {
    //         groups: {
    //             left: {
    //                 position: 'left',
    //                 attrs: commonPortAttrs
    //             },
    //             right: {
    //                 position: 'right',
    //                 attrs: commonPortAttrs
    //             },
    //             top: {
    //                 position: 'top',
    //                 attrs: commonPortAttrs
    //             },
    //             bottom: {
    //                 position: 'bottom',
    //                 attrs: commonPortAttrs
    //             }
    //         },
    //         items: [
    //             {
    //                 id: 'left_port',
    //                 group: 'left',
    //             },
    //             {
    //                 id: 'right_port',
    //                 group: 'right',
    //             },
    //             {
    //                 id: 'top_port',
    //                 group: 'top',
    //             },
    //             {
    //                 id: 'bottom_port',
    //                 group: 'bottom',
    //             }
    //         ]
    //     }
    // });
}