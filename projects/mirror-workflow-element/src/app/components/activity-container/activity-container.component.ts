import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Injector, Input, OnInit } from '@angular/core';
import { LazyService } from '../../utils';
import { ActivityNode } from '../../models';

@Component({
    selector: 'mirror-element-activity-container',
    templateUrl: './activity-container.component.html',
    styleUrls: ['./activity-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityContainerComponent implements OnInit {

    public collapse: boolean;
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

    public toggleCollapse(evt: Event): void {
        evt.stopPropagation();
        this.collapse = !this.collapse;
        this.node.collapse = this.collapse;
        this.cd.markForCheck();
    }

    public deleteNode(evt: Event): void {
        evt.stopPropagation();
        this.node.onDelete.emit(this.node.key);
    }

}
