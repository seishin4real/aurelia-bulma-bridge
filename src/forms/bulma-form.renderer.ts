// import { RenderInstruction, ValidateResult, ValidationRenderer } from 'aurelia-validation';

// export class BulmaFormRenderer {
//   render(instruction: RenderInstruction) {
//     for (let { result, elements } of instruction.unrender) {
//       for (let element of elements) {
//         this.remove(element, result);
//       }
//     }

//     for (let { result, elements } of instruction.render) {
//       for (let element of elements) {
//         this.add(element, result);
//       }
//     }
//   }

//   add(element: Element, result: ValidateResult) {
//     if (result.valid) { return; }

//     element.classList.add('is-danger')

//     const field = element.closest('.field');
//     if (!field) { return; }

//     const label = field.querySelector('label');
//     if (label) { label.classList.add('is-danger'); }

//     const message = document.createElement('p');
//     message.className = 'help is-danger';
//     message.textContent = result.message;
//     message.id = `validation-message-${result.id}`;

//     field.appendChild(message);
//   }

//   remove(element: Element, result: ValidateResult) {
//     if (result.valid) { return; }

//     element.classList.remove('is-danger')

//     const field = element.closest('.field');
//     if (!field) { return; }

//     const label = field.querySelector('label');
//     if (label) { label.classList.remove('is-danger'); }
//     // remove help-block
//     const message = field.querySelector(`#validation-message-${result.id}`);
//     if (message) { field.removeChild(message); }
//   }
// }
