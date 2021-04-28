import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'app-state-node',
    templateUrl: './state-node.component.html',
    styleUrls: ['./state-node.component.scss']
})
export class StateNodeComponent implements OnInit, OnDestroy {

    @Output()
    public customEvt = new EventEmitter();

    public constructor(
        @Inject(HomeComponent)
        private parent: HomeComponent
    ) { }
    public ngOnDestroy(): void {
        console.log('destroy');
    }

    public ngOnInit(): void {
        console.log('init');

    }

    public sendEvent(evt: Event): void {
        evt.stopPropagation();
        this.customEvt.next();
    }

}
