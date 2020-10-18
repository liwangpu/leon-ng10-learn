import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gantt } from 'dhx-gantt/dhtmlxgantt';

@Component({
    selector: 'mirror-gantt',
    templateUrl: './gantt.component.html',
    styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit {

    @ViewChild('gantContainer', { static: true, read: ElementRef })
    public gantContainer: ElementRef;
    public constructor() { }

    public ngOnInit(): void {
        var tasks = {
            data: [
                {
                    id: 1,
                    text: "Project #2",
                    start_date: "2018-04-04",
                    myTest: 'aaaa',
                    duration: 2,
                    order: 10,
                    progress: 0.4,
                    open: true
                },
                {
                    id: 2,
                    text: "Task #1",
                    start_date: "2018-04-02",
                    myTest: 'bbbb',
                    duration: 3,
                    order: 10,
                    progress: 0.6,
                    parent: 1
                },
                {
                    id: 3,
                    text: "Task #2",
                    start_date: "2018-04-01",
                    myTest: 'cccc',
                    duration: 8,
                    order: 20,
                    progress: 0.6,
                    parent: 1
                }
            ],
            links: [
                // { id: 1, source: 1, target: 2, type: "1" },
                // { id: 2, source: 2, target: 3, type: "0" }
            ]
        };

        function myFun(task) {
            return '<button>点我试试</button>';
        }
        // gantt.config
        gantt.config.date_format = "%Y-%m-%d %H:%i:%s";
        gantt.config.scales = [
            { unit: "month", step: 1, format: "%Y年%m月" },
            { unit: "day", step: 1, format: "%d" },
        ];
        gantt.config.columns = [
            { name: "text", label: "Task name", tree: true, width: '*' },
            { name: "start_date", label: "Start time", align: "center" },
            // {name:"duration",   label:"Duration",   align: "center" },
            { name: "myTest", label: "测试", template: myFun }
        ];
        gantt.init(this.gantContainer.nativeElement);


        gantt.parse(tasks);
    }

}
