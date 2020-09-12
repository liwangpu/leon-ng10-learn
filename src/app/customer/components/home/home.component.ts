import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'customer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public showLog: boolean = true;
    public constructor() {

    }

    public get title(): string {
        console.log('home title');
        return 'Home Page';
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (!this.showLog) { console.log('home onChanges'); }
    }

    public ngOnInit(): void {
        if (!this.showLog) { console.log('home onInit'); }
    }


    public ngDoCheck(): void {
        if (!this.showLog) { console.log('home doCheck'); }
    }

    public ngAfterContentInit(): void {
        if (!this.showLog) { console.log('home afterContentInit'); }
    }

    public ngAfterContentChecked(): void {
        if (!this.showLog) { console.log('home afterContentChecked'); }
    }

    public ngAfterViewInit(): void {
        if (!this.showLog) { console.log('home afterViewInit'); }
    }

    public ngAfterViewChecked(): void {
        if (!this.showLog) { console.log('home afterViewInitCheck'); }
    }

    public ngOnDestroy(): void {
        if (!this.showLog) { console.log('home destroy'); }
    }

    public test(): void {

    }
}
