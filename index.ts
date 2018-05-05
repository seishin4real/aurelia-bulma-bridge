import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

// export { BulmaFormRenderer } from './forms/bulma-form.renderer';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./src/components/b-modal'),
    PLATFORM.moduleName('./src/forms/b-addons'),
    PLATFORM.moduleName('./src/forms/b-field-h'),
    PLATFORM.moduleName('./src/forms/b-input'),
    PLATFORM.moduleName('./src/forms/b-select'),
    PLATFORM.moduleName('./src/forms/b-textarea'),
    PLATFORM.moduleName('./src/layout/b-level'),
  ]);
}
