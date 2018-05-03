import { bindable, containerless, customElement } from 'aurelia-framework';
import { attributeToggledCssClass, BooleanAttrValue, stringPrefixedCssClass } from 'resources';

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
