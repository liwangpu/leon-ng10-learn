import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ActivityNode } from '../../models';

@Component({
    selector: 'mirror-element-state-activity',
    templateUrl: './state-activity.component.html',
    styleUrls: ['./state-activity.component.scss'],
    providers: [
        {
            provide: ActivityNode,
            useExisting: forwardRef(() => StateActivityComponent)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateActivityComponent extends ActivityNode implements OnInit {

    @Input()
    public content: string;
    @Input()
    public last: boolean;
    public constructor(
        injector: Injector
    ) {
        super(injector);
    }

    public ngOnInit(): void {
    }

}
