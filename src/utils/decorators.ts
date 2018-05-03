import { BooleanAttrValue, handleBooleanAttrSimply } from './attribute.helpers';

/**
 * Injects new property with the name of the decorated property suffixed with 'Css'
 * Injects propertyChanged watch
 * @param css class to be set if attribute is defined
 */
export function attributeToggledCssClass(css: string) {
  return function (target: Object, propertyKey: string) {
    const cssProp = `${propertyKey}Css`;
    target[cssProp] = '';
    target[`${propertyKey}Changed`] = function (value: BooleanAttrValue) {
      this[cssProp] = handleBooleanAttrSimply(css, value);
    }
  };
}

export function stringToggledCssClass(css: string) {
  return function (target: Object, propertyKey: string) {
    const cssProp = `${propertyKey}Css`;
    target[cssProp] = '';
    target[`${propertyKey}Changed`] = function (value: string) {
      this[cssProp] = value ? css : '';
    }
  };
}

export function stringPrefixedCssClass(prefix: string) {
  return function (target: Object, propertyKey: string) {
    const cssProp = `${propertyKey}Css`;
    target[cssProp] = '';
    target[`${propertyKey}Changed`] = function (value: any) {
      this[cssProp] = value ? `${prefix}${value}` : '';
    }
  };
}
