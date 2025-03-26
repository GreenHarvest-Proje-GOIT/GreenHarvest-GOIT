class LoadComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    async connectedCallback() {
      const src = this.getAttribute("src");
      if (src) {
        try {
          const response = await fetch(src, { cache: "no-store" }); // Tarayıcı önbelleği engellenir
          const html = await response.text();
          this.innerHTML = html;
        } catch (error) {
          console.error(`Error loading ${src}:`, error);
        }
      }
    }
  }
  
  customElements.define("load", LoadComponent);
  