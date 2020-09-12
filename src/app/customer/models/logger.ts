import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export function getToggleValue(toggle: string): boolean {
    let str = localStorage.getItem(toggle);
    return typeof str === 'string' ? (str === 'true') : false;
}

export function setToggleValue(toggle: string, value: boolean): void {
    localStorage.setItem(toggle, `${value}`);
}

@Directive()
export abstract class Logger implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

    public abstract key: string;
    public logTitle: boolean;
    public logOnChanges: boolean;
    public logOnInit: boolean;
    public logDoCheck: boolean;
    public logAfterContentInit: boolean;
    public logAfterContentChecked: boolean;
    public logAfterViewInit: boolean;
    public logAfterViewChecked: boolean;
    public constructor() {
        this.logTitle = getToggleValue('logTitle');
        this.logOnChanges = getToggleValue('logOnChanges');
        this.logOnInit = getToggleValue('logOnInit');
        this.logDoCheck = getToggleValue('logDoCheck');
        this.logAfterContentInit = getToggleValue('logAfterContentInit');
        this.logAfterContentChecked = getToggleValue('logAfterContentChecked');
        this.logAfterViewInit = getToggleValue('logAfterViewInit');
        this.logAfterViewChecked = getToggleValue('logAfterViewChecked');
    }

    public get title(): string {
        if (this.logTitle) { console.log(`${this.key} title`); }
        return this.key;
    }


    public ngOnChanges(changes: SimpleChanges): void {
        if (this.logOnChanges) { console.log(`${this.key} onChanges`); }
    }

    public ngOnInit(): void {
        if (this.logOnInit) { console.log(`${this.key} onInit`); }
    }


    public ngDoCheck(): void {
        if (this.logDoCheck) { console.log(`${this.key} doCheck`); }
    }

    public ngAfterContentInit(): void {
        if (this.logAfterContentInit) { console.log(`${this.key} afterContentInit`); }
    }

    public ngAfterContentChecked(): void {
        if (this.logAfterContentChecked) { console.log(`${this.key} afterContentChecked`); }
    }

    public ngAfterViewInit(): void {
        if (this.logAfterViewInit) { console.log(`${this.key} afterViewInit`); }
    }

    public ngAfterViewChecked(): void {
        if (this.logAfterViewChecked) { console.log(`${this.key} afterViewInitCheck`); }
    }

}
