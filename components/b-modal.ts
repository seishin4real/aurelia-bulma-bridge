import { bindable, containerless, customElement } from 'aurelia-framework';
import { unwrap } from 'resources';

@containerless()
@customElement('b-modal')
export class BModalComponent {
  @bindable() title: string;
  footer: Element;

  attached() {
    unwrap(this.footer.querySelector('[slot=footer]'));
  }
}
