import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-select')
export class BSelectComponent {
  @bindable() help: string;
}
