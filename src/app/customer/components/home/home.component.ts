import { Component, OnDestroy, OnInit } from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
    selector: 'customer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public constructor() {

    }

    public ngOnDestroy(): void {
        // hotkeys.unbind('del', 'mytest');
        this.stopHotkeys();
    }

    public ngOnInit(): void {
        // this.startHotkeys();
    }

    public stopHotkeys(): void {
        hotkeys.deleteScope('customer');
    }

    public getScope(): void {
        let sss = hotkeys.getScope();
        console.log('getScope:', sss);
    }

    public startHotkeys(): void {
        hotkeys('del', 'customer', (event, handler) => {
            // event.preventDefault()
            alert('customer pressed F5 1')
        });

        hotkeys.setScope('customer');
    }

    public startAllHotkeys(): void {
        hotkeys.setScope('app1');
    }
}
