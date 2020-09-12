import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => CardComponent)
        }
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent extends Logger {

    public key: string = 'card';
    public constructor() {
        super();
    }

    public test(): void {

    }

}
