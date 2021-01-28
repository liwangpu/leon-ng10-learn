import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import * as fromStore from '../../../state-store';

@Component({
    selector: 'customer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private subs = new SubSink();
    public constructor(
        private store: Store<fromStore.IStore>
    ) {

    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public ngOnInit(): void {
        this.subs.sink = this.store.select(fromStore.selectUser).subscribe(user => {
            console.log('user:', user);
        });
    }

    public changeUserUpdateTime(): void {
        this.store.dispatch(fromStore.changeUserUpdateTime({ updatedAt: Date.now().toString() }));
    }
}
