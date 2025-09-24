import "./cart-checkout-summary";
import "./checkout-form";

class CartCheckout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="grid grid-cols-1 md:grid-cols-2 md:p-3 lg:px-30 lg:py-10 lg:gap-10">
        <checkout-form></checkout-form>
        <cart-checkout-summary class="py-2"></cart-checkout-summary>
    </section>
    `;
  }
}

customElements.define("cart-checkout", CartCheckout);
