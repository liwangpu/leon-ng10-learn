// @dynamic

import { Directive, Injector, Input } from '@angular/core';

@Directive()
export abstract class ActivityNode {

    @Input()
    public key: string;
    @Input()
    public title: string;
    public constructor(
        protected injector: Injector
    ) {
    }

}
