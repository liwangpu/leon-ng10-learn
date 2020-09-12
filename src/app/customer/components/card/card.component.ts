import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public showLog: boolean = true;
    public constructor() {
        if (!this.showLog) { console.log('card ctor'); }
    }

    public get title(): string {
        console.log('card title');
        return 'Card';
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (!this.showLog) { console.log('card onChanges'); }
    }

    public ngOnInit(): void {
        if (!this.showLog) { console.log('card onInit'); }
    }


    public ngDoCheck(): void {
        if (!this.showLog) { console.log('card doCheck'); }
    }

    public ngAfterContentInit(): void {
        if (!this.showLog) { console.log('card afterContentInit'); }
    }

    public ngAfterContentChecked(): void {
        if (!this.showLog) { console.log('card afterContentChecked'); }
    }

    public ngAfterViewInit(): void {
        if (!this.showLog) { console.log('card afterViewInit'); }
    }

    public ngAfterViewChecked(): void {
        if (!this.showLog) { console.log('card afterViewInitCheck'); }
    }

    public ngOnDestroy(): void {
        if (!this.showLog) { console.log('card destroy'); }
    }

    public test(): void {

    }

}
