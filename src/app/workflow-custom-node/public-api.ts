import { StateActivity } from './state-activity';

export function registryCustomElement(): void {
    customElements.define("mirror-state-activity", StateActivity);
}