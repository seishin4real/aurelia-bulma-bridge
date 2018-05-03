export type BooleanAttrValue = string | boolean;

export function handleBooleanAttrSimply(css: string, value: BooleanAttrValue, current: boolean | undefined = undefined) {
  value = value === '' ? true : !!value;
  if ((!value && value !== false) || value === current) { return; }

  return value ? css : '';
}
export function handleBooleanAttr(css: string, value: BooleanAttrValue, assignFn: (value: string) => void, current: boolean | undefined = undefined) {
  assignFn(handleBooleanAttrSimply(css, value, current));
}
