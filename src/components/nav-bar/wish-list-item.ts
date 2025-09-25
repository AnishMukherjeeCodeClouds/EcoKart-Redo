import { db } from "../../db";

class WishlistItem extends HTMLElement {
  private name = this.getAttribute("product-name") ?? "";
  private price = parseInt(this.getAttribute("product-price") ?? "1");
  private imgUrl = this.getAttribute("img-url") ?? "";
  private dbId = parseInt(this.getAttribute("db-id") ?? "1");
  private productId = parseInt(this.getAttribute("product-id") ?? "1");

  async render() {
    this.innerHTML = `
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="w-[100px] h-[100px] rounded-md relative">
              <img
                class="h-full w-full object-cover rounded-md"
                src="${this.imgUrl}"
                alt="${this.name}"
              />
              <button id="remove-from-wishlist" class="absolute top-1 left-1 bg-white rounded-full shadow-md shadow-black cursor-pointer">
                <i data-lucide="x"></i>
              </button>
            </div>
            <div>
              <p class="font-semibold">${this.name}</p>
              <p>₹${this.price}</p>
            </div>
          </div>
          <button class="add-to-cart-btn bg-lime-800 p-2 rounded-md">
            <i data-lucide="shopping-cart" class="text-white"></i>
          </button>
        </div>`;

    this.querySelector<HTMLButtonElement>(
      "#remove-from-wishlist"
    )!.addEventListener("click", async () => {
      await db.wishlist.delete(this.dbId);
      this.dispatchEvent(
        new CustomEvent("refresh-wishlist", { bubbles: true })
      );
      this.dispatchEvent(
        new CustomEvent("refresh-wishlist-status", {
          bubbles: true,
          detail: this.productId,
        })
      );
    });

    const addToCartBtn =
      this.querySelector<HTMLButtonElement>(".add-to-cart-btn")!;
    addToCartBtn.addEventListener("click", async () => {
      await db.wishlist.delete(this.dbId);
      await db.cart.add({ productId: this.productId, quantity: 1 });
      this.dispatchEvent(
        new CustomEvent("refresh-wishlist", { bubbles: true })
      );
      this.dispatchEvent(
        new CustomEvent("refresh-cart-counter", { bubbles: true })
      );
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("wish-list-item", WishlistItem);
