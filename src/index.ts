import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

// export { BulmaFormRenderer } from './forms/bulma-form.renderer';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./components/b-modal'),
    PLATFORM.moduleName('./forms/b-addons'),
    PLATFORM.moduleName('./forms/b-field-h'),
    PLATFORM.moduleName('./forms/b-input'),
    PLATFORM.moduleName('./forms/b-select'),
    PLATFORM.moduleName('./forms/b-textarea'),
  ]);
}
