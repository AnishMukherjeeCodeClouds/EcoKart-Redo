import { db } from "../../db";

class MobileNav extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <nav
        class="flex justify-between items-center px-3 py-2 border-b border-b-gray-500"
      >
        <a href="/index.html#hero">
          <eco-icon class="size-8"></eco-icon>
        </a>
        <div class="flex gap-3">
          <button>
            <i data-lucide="user" class="size-6"></i>
          </button>
          <a href="/cart.html" class="cursor-pointer relative">
            <i data-lucide="shopping-cart" class="size-6"></i>
            <span
              id="cart-counter"
              class="bg-green-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] absolute -top-2 -right-2 font-mono"
            >
              1
            </span>
          </a>
          <button id="open-wishlist">
            <i data-lucide="heart" class="size-6"></i>
          </button>
          <button id="sidebar-open">
            <i data-lucide="menu" class="size-6"></i>
          </button>
        </div>
      </nav>
      <side-bar></side-bar>
    `;

    this.querySelector<HTMLButtonElement>("#sidebar-open")!.addEventListener(
      "click",
      () => {
        this.dispatchEvent(new CustomEvent("sidebar-open", { bubbles: true }));
      }
    );

    const cartCounter =
      this.querySelector<HTMLParagraphElement>("#cart-counter")!;

    cartCounter.innerHTML = `${await db.cart.count()}`;

    document.addEventListener("refresh-cart-counter", async () => {
      cartCounter.innerHTML = `${await db.cart.count()}`;
    });

    const openWishlistBtn =
      this.querySelector<HTMLButtonElement>("#open-wishlist")!;
    openWishlistBtn.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("open-wishlist", { bubbles: true }));
    });
  }
}

customElements.define("mobile-nav", MobileNav);
