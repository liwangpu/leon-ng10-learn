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
                    // start_date: "2018-04-01",
                    myTest: 'aaaa',
                    // duration: 2,
                    progress: 0.4,
                    open: true
                },
                {
                    id: 2,
                    text: "Task #1",
                    start_date: "2018-04-02",
                    myTest: 'bbbb',
                    duration: 1,
                    progress: 0.6,
                    parent: 1,
                    open: true,
                    readonly: false,
                    // editable: true
                },
                {
                    id: 3,
                    text: "Task #2",
                    start_date: "2018-04-03",
                    myTest: 'cccc',
                    duration: 3,
                    // type: 'milestone',
                    progress: 0.6,
                    parent: 1
                },
                {
                    id: 4,
                    text: "Task #3",
                    start_date: "2018-04-05",
                    myTest: 'cccc',
                    duration: 5,
                    progress: 0.6,
                    parent: 1
                }
            ],
            links: [
                { id: 1, source: 2, target: 3, type: "0" },
                { id: 2, source: 3, target: 4, type: "0" }
            ]
        };

        function myFun(task) {
            return '<button>点我试试</button>';
        }
        // var eventId = gantt.attachEvent("onTaskClick", function (id, e) {
        //     alert("You've just clicked an item with id=" + id);
        // }, null);
        // //to detach event
        // gantt.detachEvent(eventId);
        gantt.attachEvent("onTaskDblClick", function (id, e) {
            alert("You've just clicked a task with id=" + id);
        }, null);

        gantt.checkEvent("onTaskDblClick"); //returns 'true'

        gantt.attachEvent("onAfterTaskUpdate", function (id, e) {
            // alert("You've just clicked a task with id=" + id);
            console.log('id', id, e);

        }, null);
        gantt.checkEvent("onAfterTaskUpdate"); //returns 'true'

        // gantt.config
        // gantt.config.duration_unit = "hour";//an hour
        // gantt.config.duration_step = 3;
        gantt.config.date_format = "%Y-%m-%d %H:%i:%s";
        gantt.config.scales = [
            { unit: "month", step: 1, format: "%Y年%m月" },
            { unit: "day", step: 1, format: "%d" },
        ];
        gantt.config.columns = [
            { name: "text", label: "Task name", tree: true, width: '*' },
            { name: "start_date", label: "Start time", align: "center" },
            { name: "duration", label: "Duration", align: "center" },
            // { name: "myTest", label: "测试", template: myFun }
        ];
        gantt.init(this.gantContainer.nativeElement);


        gantt.parse(tasks);

        // console.log("";

        let start_date_str = () => {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth();
            return new Date(currentYear, currentMonth - 1, 5);
        }

        console.log(start_date_str());
        

    }

}
