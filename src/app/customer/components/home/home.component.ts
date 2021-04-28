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
    private graphContainerResizeObs: ResizeObserver;
    public constructor(
        private ngZone: NgZone
    ) {

    }

    public ngOnDestroy(): void {
        if (this.graphContainerResizeObs) { this.graphContainerResizeObs.disconnect(); }
    }

    public ngOnInit(): void {
        this.renderGraph();

    }

    public ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.graphContainerResizeObs = new ResizeObserver(entries => {
                let rect = entries[0].contentRect;
                this.graph.resize(rect.width, rect.height);
            });

            this.graphContainerResizeObs.observe(this.graphContainer.nativeElement);

            // // 快捷键配置
            // this.graph.bindKey('ctrl+c', () => {
            //     const cells = this.graph.getSelectedCells();
            //     // if (cells.length) {
            //     //     this.graph.copy(cells)
            //     // }
            //     // return false
            //     console.log('copy:', cells);
            // });

            // this.graph.bindKey('ctrl+z', () => {
            //     this.graph.undo();
            // });

            // this.graph.bindKey('ctrl+shift+z', () => {
            //     this.graph.redo();
            // });
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
        let id = `state_node_${Date.now().toString()}`;
        const rect = new Shape.Rect({
            id,
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
        // node1.setData({ title: Date.now().toString(), content: '修改了', key: 'test-node-1' }, { deep: false, overwrite: false });
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
            ports: {
                groups: {
                    left: {
                        position: 'left',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#31d0c6',
                                strokeWidth: 2,
                                fill: '#fff'
                            }
                        }
                    },
                    right: {
                        position: 'right',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#31d0c6',
                                strokeWidth: 2,
                                fill: '#fff'
                            }
                        }
                    },
                    top: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#31d0c6',
                                strokeWidth: 2,
                                fill: '#fff'
                            }
                        }
                    },
                    bottom: {
                        position: 'bottom',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#31d0c6',
                                strokeWidth: 2,
                                fill: '#fff'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'left_port',
                        group: 'left',
                    },
                    {
                        id: 'right_port',
                        group: 'right',
                    },
                    {
                        id: 'top_port',
                        group: 'top',
                    },
                    {
                        id: 'bottom_port',
                        group: 'bottom',
                    }
                ]
            }
        });
    }

    private renderGraph(): void {
        this.graph = new Graph({
            container: this.graphAnchor.nativeElement,
            history: true,
            selecting: {
                enabled: true,
                multiple: true,
                rubberband: true,
                movable: true,
                showNodeSelectionBox: true,
                className: 'my-selecting',
            },
            clipboard: {
                enabled: true,
            },
            keyboard: {
                enabled: true
            },
            scroller: true,
            grid: {
                size: 10,      // 网格大小 10px
                visible: true, // 渲染网格背景
            },
        });

        this.graph.addNode({
            id: 'startup_node',
            x: 40,
            y: 40,
            width: 80,
            height: 60,
            shape: 'html',
            html: 'startup-node',
            ports: {
                groups: {
                    bottom: {
                        position: 'bottom',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#31d0c6',
                                strokeWidth: 2,
                                fill: '#fff'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'bottom_port',
                        group: 'bottom',
                    }
                ]
            }
        });

        let cacheStr = localStorage.getItem('graph');
        if (cacheStr) {
            this.graph.fromJSON(JSON.parse(cacheStr));
        } else {
            // this.graph.fromJSON(data);
        }
    }

    private resizeGraph(): void {

    }
}
