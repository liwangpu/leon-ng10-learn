import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => GridComponent)
        }
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent extends Logger {

    public key: string = 'grid';
    public constructor() {
        super();
    }

    public test(): void {

    }

}
