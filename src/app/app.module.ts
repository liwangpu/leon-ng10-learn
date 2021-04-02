import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registryCustomElement } from './workflow-custom-node/public-api';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        registryCustomElement();
    }
}
