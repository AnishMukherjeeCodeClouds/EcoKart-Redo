import { createIcons, icons } from "lucide";
import { db } from "../../../db";

class ProductCard extends HTMLElement {
  private productId = parseInt(this.getAttribute("product-id") ?? "1");
  private productName = this.getAttribute("product-name") ?? "";
  private imgUrl = this.getAttribute("img-url") ?? "";
  private productLowPrice = this.getAttribute("product-low-price") ?? "";
  private productHighPrice = this.getAttribute("product-high-price") ?? "";

  private refreshWishlistStatus = (e: Event) => {
    const customEvent = e as CustomEvent<number>;
    if (this.productId === customEvent.detail) this.render();
  };

  async render() {
    this.innerHTML = `
          <div class="w-[200px] md:w-[220px] lg:w-[275px] flex flex-col rounded-md shadow-md group">
            <a
              href="/product.html?id=${this.productId}"
              class="w-full h-[200px] md:h-[220px] lg:h-[275px] rounded-t-md overflow-hidden">
              <img
                class="h-full w-full object-cover object-[30%_30%] rounded-t-md group-hover:scale-[1.08] transition-all duration-300"
                src="${this.imgUrl}"
                alt="${this.productName}"
                loading="lazy"
              />
            </a>
            <div class="w-full grow py-3 space-y-1">
            <p class="text-center font-semibold lg:text-xl group-hover:font-bold transition-all duration-300">
              <a
              href="/product.html?id=${this.productId}" >
                ${this.productName}
              </a>
            </p>
              <p class="text-center font-medium text-lime-800 lg:text-lg">₹${this.productLowPrice} - ₹${this.productHighPrice}</p>
              <div class="flex justify-center gap-5">
                <a href="/product.html?id=${this.productId}">
                  <i title="View product" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="external-link"></i>
                </a>
                <button class="toggle-wishlist-btn">
                  <i title="Add to wishlist" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="heart"></i>
                </button>
                <button class="add-to-cart-btn">
                  <i title="Add to cart" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
    `;

    createIcons({ icons });

    const toggleWishlistBtn = this.querySelector<HTMLButtonElement>(
      ".toggle-wishlist-btn"
    )!;

    const isInWishlist =
      (await db.wishlist.where("productId").equals(this.productId).count()) > 0;
    if (isInWishlist) {
      toggleWishlistBtn.querySelector("svg")!.classList.add("fill-red-600");
    }

    toggleWishlistBtn.addEventListener("click", async () => {
      if (!isInWishlist) await db.wishlist.add({ productId: this.productId });
      else await db.wishlist.where("productId").equals(this.productId).delete();
      this.dispatchEvent(
        new CustomEvent("refresh-wishlist", { bubbles: true })
      );
      this.dispatchEvent(
        new CustomEvent("refresh-wishlist-status", {
          bubbles: true,
          detail: this.productId,
        })
      );
      await this.render();
    });

    const addToCartBtn =
      this.querySelector<HTMLButtonElement>(".add-to-cart-btn")!;
    addToCartBtn.addEventListener("click", async () => {
      await db.cart.add({ productId: this.productId, quantity: 1 });
      this.dispatchEvent(
        new CustomEvent("refresh-cart-counter", { bubbles: true })
      );
    });

    document.addEventListener(
      "refresh-wishlist-status",
      this.refreshWishlistStatus
    );
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    document.removeEventListener(
      "refresh-wishlist-status",
      this.refreshWishlistStatus
    );
  }
}

customElements.define("product-card", ProductCard);
