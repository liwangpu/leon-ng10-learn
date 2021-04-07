import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'school-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public content: string = 'robot';
    @ViewChild('stateNode')
    public stateNode: ElementRef;
    public constructor() {

    }

    public ngOnInit(): void {

    }

    public changTitle(): void {
        this.content = Date.now().toString();
        this.stateNode.nativeElement.content=this.content;
    }

}
