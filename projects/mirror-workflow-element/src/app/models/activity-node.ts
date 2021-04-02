// @dynamic

import { Directive, EventEmitter, HostBinding, HostListener, Injector, Input, Output } from '@angular/core';

@Directive()
export abstract class ActivityNode {

    @HostBinding('class.collapse')
    public collapse: boolean;
    @HostBinding('class.active')
    public actived: boolean;
    @Output()
    public readonly onDelete = new EventEmitter<string>();
    @Output()
    public readonly onActive = new EventEmitter<string>();
    @Input()
    public key: string;
    @Input()
    public title: string;
    public constructor(
        protected injector: Injector
    ) {
    }

    @HostListener('click', ['$event'])
    public activeNode(evt: Event): void {
        evt.stopPropagation();
        this.actived = true;
        this.onActive.emit(this.key);
    }
}
