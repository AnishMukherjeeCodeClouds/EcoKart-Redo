import { products } from "../../products";

class Description extends HTMLElement {
  connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id") ?? "1");
    const targetProduct = products.find((p) => p.id === id);

    this.innerHTML = `
          <div class="px-9 md:px-12 lg:px-64 space-y-1 lg:space-y-2">
            <p class="text-lime-800 font-bold text-lg lg:text-xl">
              Description
            </p>
            <p class="text-gray-700 text-sm lg:text-base">
            ${targetProduct?.description}
            </p>
          </div>
    `;
  }
}

customElements.define("prod-description", Description);
