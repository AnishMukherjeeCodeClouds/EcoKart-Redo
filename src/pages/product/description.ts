import { products } from "../../products";

class Description extends HTMLElement {
  connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id") ?? "1");
    const targetProduct = products.find((p) => p.id === id);

    this.innerHTML = `
          <div class="space-y-1 lg:px-14 lg:space-y-2">
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
