import { Component, OnDestroy, OnInit } from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public ngOnDestroy(): void {
        // hotkeys.unbind('del', 'mytest');
        // hotkeys.deleteScope('app1');
    }

    public ngOnInit(): void {
        // hotkeys('del', 'app1', (event, handler) => {
        //     event.preventDefault()
        //     alert('app pressed F5!')
        // });

        // hotkeys.setScope('app1');
    }
}
