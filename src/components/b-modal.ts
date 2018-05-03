import { unwrap } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-modal')
export class BModalComponent {
  @bindable() title: string;
  footer: Element;

  attached() {
    unwrap(this.footer.querySelector('[slot=footer]'));
  }
}
