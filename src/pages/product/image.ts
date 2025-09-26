import { db } from "../../db";
import { products } from "../../products";

class Image extends HTMLElement {
  private params = new URLSearchParams(window.location.search);
  private productId = parseInt(this.params.get("id") ?? "1");
  private targetProduct = products.find((p) => p.id === this.productId)!;

  private refreshWishlistStatus = (e: Event) => {
    const customEvent = e as CustomEvent<number>;
    if (this.productId === customEvent.detail) this.render();
  };

  async render() {
    this.innerHTML = `
      <div
        class="w-full aspect-square lg:w-[500px] rounded-md lg:justify-self-end relative"
      >
        <button id="toggle-wishlist-btn" class="absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer">
          <i data-lucide="heart"></i>
        </button>
        <img
        class="h-full w-full object-cover rounded-md" 
        src="${this.targetProduct?.imgUrl}" alt="${this.targetProduct?.name}"></img>
      </div>
        `;

    const toggleWishlistBtn = this.querySelector<HTMLButtonElement>(
      "#toggle-wishlist-btn"
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

customElements.define("product-image", Image);
