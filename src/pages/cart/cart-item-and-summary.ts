import "./cart-items";
import "./cart-summary";

class CartItemAndSummary extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:px-34 lg:py-10 grow">
        <cart-items class="lg:col-span-2"></cart-items>
        <cart-summary></cart-summary>
      </div>
    `;
  }
}

customElements.define("cart-item-and-summary", CartItemAndSummary);
