import { ChangeDetectionStrategy, Component, forwardRef, SimpleChanges } from '@angular/core';
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

    public ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }


    public ngDoCheck(): void {
        super.ngDoCheck();
    }

    public ngAfterContentInit(): void {
        super.ngAfterContentInit();
    }

    public ngAfterContentChecked(): void {
        super.ngAfterContentChecked();
    }

    public ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    public ngAfterViewChecked(): void {
        super.ngAfterViewChecked();
    }

    public test(): void {

    }

}
