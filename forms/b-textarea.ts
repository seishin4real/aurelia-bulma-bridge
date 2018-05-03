import { bindable, containerless, customElement } from 'aurelia-framework';
import { stringPrefixedCssClass } from 'resources';

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
