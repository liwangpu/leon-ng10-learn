import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public showLog: boolean = true;
    public constructor() {
        if (!this.showLog) { console.log('panel ctor'); }
    }

    public get title(): string {
        console.log('tabs title');
        return 'Tabs';
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (!this.showLog) { console.log('panel onChanges'); }
    }

    public ngOnInit(): void {
        if (!this.showLog) { console.log('panel onInit'); }
    }


    public ngDoCheck(): void {
        if (!this.showLog) { console.log('panel doCheck'); }
    }

    public ngAfterContentInit(): void {
        if (!this.showLog) { console.log('panel afterContentInit'); }
    }

    public ngAfterContentChecked(): void {
        if (!this.showLog) { console.log('panel afterContentChecked'); }
    }

    public ngAfterViewInit(): void {
        if (!this.showLog) { console.log('panel afterViewInit'); }
    }

    public ngAfterViewChecked(): void {
        if (!this.showLog) { console.log('panel afterViewInitCheck'); }
    }

    public ngOnDestroy(): void {
        if (!this.showLog) { console.log('panel destroy'); }
    }

    public test(): void {

    }

}
