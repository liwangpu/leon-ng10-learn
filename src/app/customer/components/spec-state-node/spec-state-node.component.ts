import { Component, OnInit } from '@angular/core';
import { HTML } from '@antv/x6/lib/shape/standard';
import { MyShapeNode, ShapeNode } from '../../graph-extension';
import { Cell, Graph, Shape } from '@antv/x6';

// @ShapeNode('spec-state-node')
@Component({
    selector: 'app-spec-state-node',
    templateUrl: './spec-state-node.component.html',
    styleUrls: ['./spec-state-node.component.scss']
})
export class SpecStateNodeComponent extends MyShapeNode implements OnInit {

    public constructor() {
        super();
    }

    public ngOnInit(): void {
    }

    // public render: HTML.Component;

    public render: HTML.Component = (node: Cell) => {
        // tslint:disable-next-line: prefer-immediate-return
        // let activity: HTMLElement = document.createElement('app-state-node');
        // return activity;
        return this as any;
    }

    public shouldComponentUpdate: boolean = false;

}
