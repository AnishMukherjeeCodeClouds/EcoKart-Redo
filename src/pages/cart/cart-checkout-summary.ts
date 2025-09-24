import { db } from "../../db";
import { products } from "../../products";

class CartCheckoutSummary extends HTMLElement {
  async connectedCallback() {
    const cartItems = await db.cart.toArray();
    const cartProducts = cartItems.map((ci) => ({
      ...ci,
      details: products.find((p) => p.id === ci.productId)!,
    }));

    const subtotalCost = cartProducts.reduce(
      (prev, curr) => prev + curr.quantity * curr.details.price,
      0
    );
    const shippingCost = subtotalCost * 0.1;
    const taxCost = subtotalCost * 0.2;

    this.innerHTML = `
        <section id="cart-total" class="px-5 py-4">
          <div class="border-[3px] border-gray-200 rounded-md p-6 space-y-2">
            <p class="text-xl font-bold">ORDER OVERVIEW</p>
            <p class="font-semibold">Items</p>
            <div>
                ${cartProducts
                  .map(
                    (cp) => `
                <div class="flex justify-between">
                    <p>${cp.details.name} (x${cp.quantity})</p>
                    <p class="text-gray-600">₹${
                      cp.quantity * cp.details.price
                    }</p>
                </div>
                        `
                  )
                  .join("\n")}
            </div>
            <hr class="border-b border-gray-200" />
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
          </div>
        </section>
    `;
  }
}

customElements.define("cart-checkout-summary", CartCheckoutSummary);
