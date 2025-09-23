import { products } from "../../products";

class Image extends HTMLElement {
  connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id") ?? "1");
    const targetProduct = products.find((p) => p.id === id);

    this.innerHTML = `
    <img
    class="h-full w-full object-cover rounded-md" 
    src="${targetProduct?.imgUrl}" alt="${targetProduct?.name}"></img>`;
  }
}

customElements.define("product-image", Image);
