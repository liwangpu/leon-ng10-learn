import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => PanelComponent)
        }
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent extends Logger {

    public key: string = 'panel';
    public constructor() {
        super();
    }

    public test(): void {

    }

}
