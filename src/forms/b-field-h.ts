import { attributeToggledCssClass, BooleanAttrValue, stringPrefixedCssClass } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-field-h')
export class BFieldHComponent {
  @bindable() label: string;

  @stringPrefixedCssClass('is-')
  @bindable() size: 'normal' | 'small' | 'medium' | 'large';

  attached() {
    if (!this.size) { this.size = 'small'; }
  }
}
