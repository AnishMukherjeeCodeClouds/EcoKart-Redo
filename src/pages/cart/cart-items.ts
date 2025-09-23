import { db } from "../../db";
import "./cart-item-big";
import "./cart-item-small";

class CartItems extends HTMLElement {
  private refreshCart = () => this.render();

  async render() {
    if ((await db.cart.count()) === 0) {
      this.innerHTML = `nothing to see here`;
      return;
    }

    const cartItems = await db.cart.toArray();

    const smallItemsString = cartItems
      .map(
        (ci) => `
        <cart-item-small
            class="md:block"

            db-id="${ci.id}"
            product-id="${ci.productId}"
        >
        </cart-item-small>
        <hr class="border-b border-gray-200" />
        `
      )
      .join("\n");

    const bigItemsString = cartItems
      .map(
        (ci) => `
        <cart-item-big
            class="hidden md:block"

            db-id="${ci.id}"
            product-id="${ci.productId}"
        >
        </cart-item-big>
        <hr class="border-b border-gray-200" />
        `
      )
      .join("\n");

    this.innerHTML = `
      <section class="flex flex-col px-5 py-4 md:hidden">
        ${smallItemsString}
      </section>
      <section class="hidden md:flex flex-col gap-3 px-5 py-4">
        <div class="grid grid-cols-7 place-items-center">
          <p class="col-span-2"></p>
          <p class="font-bold col-span-2">PRODUCT</p>
          <p class="font-bold">PRICE</p>
          <p class="font-bold">QUANTITY</p>
          <p class="font-bold">SUBTOTAL</p>
        </div>
        <hr class="border-b border-gray-400" />
        ${bigItemsString}
      </section>
    `;

    document.addEventListener("refresh-cart", this.refreshCart);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    document.removeEventListener("refresh-cart", this.refreshCart);
  }
}

customElements.define("cart-items", CartItems);
