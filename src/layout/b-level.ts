import { unwrap } from '../utils';
import { containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-level')
export class BLevelComponent {
  left: Element;
  right: Element;

  attached() {
    unwrap(this.left.querySelector('[slot=left]'));
    unwrap(this.right.querySelector('[slot=right]'));
  }
}
