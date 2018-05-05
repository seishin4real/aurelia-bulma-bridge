import { attributeToggledCssClass, BooleanAttrValue, stringPrefixedCssClass, stringToggledCssClass } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-input')
export class BInputComponent {
  @bindable() placeholder = '';
  @bindable() type = 'text';
  @bindable() value: string;
  @bindable() help: string;

  @attributeToggledCssClass('has-text-right')
  @bindable() isRight: BooleanAttrValue;

  @stringPrefixedCssClass('is-')
  @bindable() size: 'normal' | 'small' | 'medium' | 'large';

  @stringToggledCssClass('has-icons-left')
  @bindable() iconLeft: string;

  @stringToggledCssClass('has-icons-right')
  @bindable() iconRight: string;

  @attributeToggledCssClass('is-expanded')
  @bindable() isExpanded: BooleanAttrValue;

  attached() {
    if (!this.size) { this.size = 'small'; }
  }
}
