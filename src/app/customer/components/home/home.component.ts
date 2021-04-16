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
        hotkeys.deleteScope('partOne');
        hotkeys.deleteScope('partTwo');
    }

    public ngOnInit(): void {
        hotkeys('del', 'partOne', (event, handler) => {
            event.preventDefault();
            alert('区域一 按下 del')
        });

        hotkeys('del', 'partTwo', (event, handler) => {
            event.preventDefault();
            alert('区域二 按下 del')
        });
    }

    // public stopHotkeys(): void {
    //     hotkeys.deleteScope('customer');
    // }

    public getScope(): void {
        let s = hotkeys.getScope();
        console.log('区域:', s);
    }

    public startPartOneHotkeys(): void {
        hotkeys.setScope('partOne');
    }

    public startPartTwoHotkeys(): void {
        hotkeys.setScope('partTwo');
    }

}
