import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => TabsComponent)
        }
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent extends Logger {

    public key: string = 'tabs';
    public constructor() {
        super();
    }

    public test(): void {

    }

}
