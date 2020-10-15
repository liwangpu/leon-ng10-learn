import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent } from './components/gantt/gantt.component';

@NgModule({
    declarations: [GanttComponent],
    imports: [
        CommonModule
    ],
    exports: [
        GanttComponent
    ]
})
export class MirrorGanttModule { }
