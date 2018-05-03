export function unwrap(wrapper) {
  if (!wrapper) { return; }
  
  const frag = document.createDocumentFragment();
  while (wrapper.firstChild) {
    frag.appendChild(wrapper.removeChild(wrapper.firstChild));
  }
  wrapper.parentNode.replaceChild(frag, wrapper);
}
