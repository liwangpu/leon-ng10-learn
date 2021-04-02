import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StateActivityComponent } from './components/state-activity/state-activity.component';
import { createCustomElement } from '@angular/elements';
import { ActivityContainerComponent } from './components/activity-container/activity-container.component';

@NgModule({
    declarations: [
        AppComponent,
        StateActivityComponent,
        ActivityContainerComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    // bootstrap: [AppComponent],// 如果是编译elements记得需要注释bootstrap
    exports: [StateActivityComponent]
})
export class AppModule {
    public constructor(private injector: Injector) { }

    public ngDoBootstrap() {
        const stateActivityComponent = createCustomElement(StateActivityComponent, { injector: this.injector });
        customElements.define('mirror-element-state-activity', stateActivityComponent);
    }
}
