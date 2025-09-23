import { db } from "../../db";
import { products } from "../../products";

class CartSummary extends HTMLElement {
  private refreshSummary = () => this.render();

  async render() {
    const subtotalCost = (await db.cart.toArray()).reduce(
      (prev, curr) =>
        prev +
        curr.quantity * products.find((p) => p.id === curr.productId)!.price,
      0
    );
    const shippingCost = subtotalCost * 0.1;
    const taxCost = subtotalCost * 0.2;

    this.innerHTML = `
        <section id="cart-total" class="px-5 py-4">
          <div class="border-[3px] border-gray-200 rounded-md p-6 space-y-2">
            <p class="text-xl font-bold">CART SUMMARY</p>
            <div class="flex justify-between">
              <p class="font-semibold">Subtotal</p>
              <p class="text-gray-600">₹${subtotalCost}</p>
            </div>
            <hr class="border-b border-gray-200" />
            <div class="space-y-1">
              <div class="flex justify-between">
                <p class="font-semibold">Shipping</p>
                <p class="text-gray-600">₹${shippingCost}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-semibold">Tax</p>
                <p class="text-gray-600">₹${taxCost}</p>
              </div>
            </div>
            <hr class="border-b border-gray-200" />
            <div class="flex justify-between items-center">
              <p class="font-semibold">Total</p>
              <p class="text-green-600 font-semibold text-xl">₹${
                subtotalCost + shippingCost + taxCost
              }</p>
            </div>
            <button class="bg-lime-800 text-white py-2 w-full rounded-md mt-2">
              Checkout
            </button>
          </div>
        </section>
    `;

    document.addEventListener("refresh-summary", this.refreshSummary);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    document.removeEventListener("refresh-summary", this.refreshSummary);
  }
}

customElements.define("cart-summary", CartSummary);
