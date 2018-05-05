import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-message')
export class BMessageComponent {
  @bindable() title;
}
