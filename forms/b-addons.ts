import { bindable, containerless, customElement } from 'aurelia-framework';
import { BooleanAttrValue, handleBooleanAttrSimply } from 'resources';

@containerless()
@customElement('b-addons')
export class BAddonsComponent { 
  @bindable() help: string;

  @bindable() isExpanded: BooleanAttrValue;
  isExpandedCss = '';
  inverseChanged(value: BooleanAttrValue) { this.isExpandedCss = handleBooleanAttrSimply('is-expanded', value); }
}
