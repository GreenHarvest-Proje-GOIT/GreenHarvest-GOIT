class LoadComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const src = this.getAttribute("src");
      if (src) {
        fetch(src)
          .then(response => response.text())
          .then(html => {
            this.innerHTML = html;
          })
          .catch(error => console.error(`Error loading ${src}:`, error));
      }
    }
  }
  
  customElements.define("load", LoadComponent);
  