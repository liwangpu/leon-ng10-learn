import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'customer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => HomeComponent)
        }
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends Logger {

    public key: string = 'home';
    public constructor() {
        super();
    }

    public test(): void {

    }
}
