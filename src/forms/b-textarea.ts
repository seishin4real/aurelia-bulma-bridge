import { stringPrefixedCssClass } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-textarea')
export class BTextareaComponent {
  @bindable() placeholder = '';
  @bindable() value: string;

  @stringPrefixedCssClass('is-')
  @bindable() size: 'normal' | 'small' | 'medium' | 'large';

  attached() {
    if (!this.size) { this.size = 'small'; }
  }
}
