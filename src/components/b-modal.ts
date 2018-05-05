import { unwrap } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-modal')
export class BModalComponent {
  @bindable() title: string;
  footer: Element;
  header: Element;

  attached() {
    unwrap(this.header.querySelector('[slot=header]'));
    unwrap(this.footer.querySelector('[slot=footer]'));
  }
}
