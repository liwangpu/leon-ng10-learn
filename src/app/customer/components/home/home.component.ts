import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Graph, Shape } from '@antv/x6';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
    selector: 'customer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

    private graph: Graph;
    @ViewChild('graphAnchor', { static: true })
    public graphAnchor: ElementRef;
    @ViewChild('graphContainer', { static: true })
    public graphContainer: ElementRef;
    private resize: any;
    private graphContainerResizeObs: ResizeObserver;
    public constructor(
        private ngZone: NgZone
    ) {

    }

    ngOnDestroy(): void {
        if (this.resize) {
            window.removeEventListener('resize', this.resize);
        }
    }

    public ngOnInit(): void {
        this.renderGraph();

    }

    public ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.graphContainerResizeObs = new ResizeObserver(function (entries) {
                let rect = entries[0].contentRect;
                this.graph.resize(rect.width, rect.height);
            });

            this.graphContainerResizeObs.observe(this.graphContainer.nativeElement);
        });
    }

    public storage(): void {
        let data = this.graph.toJSON();
        localStorage.setItem('graph', JSON.stringify(data));
        console.log(data);
    }

    public clearStorage(): void {
        localStorage.removeItem('graph');
        location.reload();
    }

    public addNode(): void {
        const rect = new Shape.Rect({
            id: 'node122',
            x: 140,
            y: 140,
            width: 100,
            height: 140,
            label: 'rect'
        });



        this.graph.addNode(rect);

        // rect.trigger('node:delete', {});
    }

    public changeNode(): void {
        let nodes = this.graph.getNodes();
        let node1 = nodes.find(n => n.id === 'customNode1');
        // node1.setAttrByPath('title', {
        //     value: '测试一下'
        // });
        node1.setData({ title: Date.now().toString(), content: '修改了', key: 'test-node-1' }, { deep: false, overwrite: false });

        // node1.setData({ title: Date.now().toString() });
        // console.log('node:', nodes);
    }

    public addCustomStateNode(): void {
        // let id = `state_node_${Date.now().toString()}`;
        let id = 'customNode1';
        const node = this.graph.addNode({
            id,
            x: 40,
            y: 40,
            width: 200,
            height: 120,
            shape: 'html',
            html: 'state-node',
            data: {
                title: '决策节点'
            },
            attrs: {

            },
        });

        // const rect = new Shape.Rect({
        //     id: 'node122',
        //     x: 140,
        //     y: 140,
        //     width: 100,
        //     height: 140,
        //     label: 'rect',
        //     attrs: {
        //         image: {
        //             event: 'node:delete',
        //             xlinkHref: 'trash.png',
        //             width: 20,
        //             height: 20,
        //         }
        //     }
        // });

        // this.graph.addNode(rect);
    }

    private renderGraph(): void {
        this.graph = new Graph({
            container: this.graphAnchor.nativeElement,
            // background: {
            //     color: '#fffbe6', // 设置画布背景颜色
            // },
            scroller: true,
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
            },
        });

        let cacheStr = localStorage.getItem('graph');
        if (cacheStr) {
            this.graph.fromJSON(JSON.parse(cacheStr));
        } else {
            // this.graph.fromJSON(data);
        }

        // this.graph.on('node:customevent', ({ view, e }) => {
        //     console.log('node:customevent event:', view, e);
        // });

        // this.graph.on('*', ({ name, view, e }) => {
        //     console.log('event:', name, view, e);

        // });

        window['flowNodeEventCallback'] = () => {
            console.log('event:');

        };
    }

    private resizeGraph(): void {

    }
}
