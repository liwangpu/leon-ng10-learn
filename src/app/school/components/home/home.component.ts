import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'school-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public title: string = 'robot';
    public constructor() {

    }

    public ngOnInit(): void {

    }

    public changTitle(): void {
        this.title = Date.now().toString();
    }

}
