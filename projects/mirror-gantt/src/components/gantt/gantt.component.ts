import { Component, OnInit } from '@angular/core';
import 'dhx-gantt/dhtmlxgantt';

@Component({
    selector: 'mirror-gantt',
    templateUrl: './gantt.component.html',
    styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit {

    public constructor() { }

    public ngOnInit(): void {
        var tasks = {
            data: [
                {
                    id: 1,
                    text: "Project #2",
                    start_date: "2018-01-04",
                    myTest: 'aaaa',
                    duration: 18,
                    order: 10,
                    progress: 0.4,
                    open: true
                },
                {
                    id: 2,
                    text: "Task #1",
                    start_date: "2018-04-02",
                    myTest: 'bbbb',
                    duration: 8,
                    order: 10,
                    progress: 0.6,
                    parent: 1
                },
                {
                    id: 3,
                    text: "Task #2",
                    start_date: "2018-04-11",
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
        gantt.config.columns = [
            { name: "text", label: "Task name", tree: true, width: '*' },
            { name: "start_date", label: "Start time", align: "center" },
            // {name:"duration",   label:"Duration",   align: "center" },
            { name: "myTest", label: "测试", template: myFun }
        ];
        gantt.init("gantt_here");


        gantt.parse(tasks);
    }

}
