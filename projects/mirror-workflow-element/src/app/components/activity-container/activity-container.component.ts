import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, OnInit } from '@angular/core';
import { LazyService } from '../../utils';
import { ActivityNode } from '../../models';

@Component({
    selector: 'mirror-element-activity-container',
    templateUrl: './activity-container.component.html',
    styleUrls: ['./activity-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityContainerComponent implements OnInit {

    @Input()
    public title: string;
    @LazyService(ChangeDetectorRef)
    protected readonly cd: ChangeDetectorRef;
    @LazyService(ActivityNode)
    private readonly node: ActivityNode;
    public constructor(
        protected injector: Injector
    ) { }


    public ngOnInit(): void {
        this.title = this.node.title;
    }

}
