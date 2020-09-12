import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public showLog: boolean = true;
    public constructor() {
        if (!this.showLog) { console.log('grid ctor'); }
    }

    public get title(): string {
        console.log('grid title');
        return 'Grid';
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (!this.showLog) { console.log('grid onChanges'); }
    }

    public ngOnInit(): void {
        if (!this.showLog) { console.log('grid onInit'); }
    }


    public ngDoCheck(): void {
        if (!this.showLog) { console.log('grid doCheck'); }
    }

    public ngAfterContentInit(): void {
        if (!this.showLog) { console.log('grid afterContentInit'); }
    }

    public ngAfterContentChecked(): void {
        if (!this.showLog) { console.log('grid afterContentChecked'); }
    }

    public ngAfterViewInit(): void {
        if (!this.showLog) { console.log('grid afterViewInit'); }
    }

    public ngAfterViewChecked(): void {
        if (!this.showLog) { console.log('grid afterViewInitCheck'); }
    }

    public ngOnDestroy(): void {
        if (!this.showLog) { console.log('grid destroy'); }
    }

    public test(): void {

    }

}
