import { BooleanAttrValue, handleBooleanAttrSimply } from '../utils';
import { bindable, containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('b-addons')
export class BAddonsComponent {
  @bindable() help: string;

  @bindable() isExpanded: BooleanAttrValue;
  isExpandedCss = '';
  inverseChanged(value: BooleanAttrValue) { this.isExpandedCss = handleBooleanAttrSimply('is-expanded', value); }
}
