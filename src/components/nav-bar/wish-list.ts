import { createIcons, icons } from "lucide";
import { db } from "../../db";
import { products } from "../../products";
import "./wish-list-item";

class WishList extends HTMLElement {
  private refreshWishlist = () => this.render();
  async render() {
    const wishlistItemsInDb = await db.wishlist.toArray();

    if (wishlistItemsInDb.length === 0) {
      this.querySelector<HTMLDivElement>(
        "#target-container"
      )!.innerHTML = `<p class="h-full w-full text-2xl font-medium grid place-items-center">No items in the wishlist</p>`;
    } else {
      const wishlistItems = wishlistItemsInDb.map((wi) => ({
        ...wi,
        details: products.find((p) => p.id === wi.productId)!,
      }));

      const itemsString = wishlistItems
        .map(
          (wi) => `
        <wish-list-item
            product-name="${wi.details.name}"
            product-price="${wi.details.price}"
            img-url="${wi.details.imgUrl}"
            db-id="${wi.id}"
            product-id="${wi.productId}"
        >
        </wish-list-item>
        `
        )
        .join("\n");

      this.querySelector<HTMLDivElement>("#target-container")!.innerHTML =
        itemsString;

      createIcons({ icons });
    }

    const wishlist = this.querySelector<HTMLDivElement>("#wishlist")!;
    const wishlistOverlay =
      this.querySelector<HTMLDivElement>("#wishlist-overlay")!;

    document.addEventListener("open-wishlist", () => {
      document.body.classList.add("overflow-y-hidden");
      wishlist.classList.remove("translate-x-full");
      wishlist.classList.add("translate-x-0");
      wishlistOverlay.classList.remove("translate-x-full");
      wishlistOverlay.classList.add("translate-x-0");
    });

    this.querySelector<HTMLButtonElement>(
      "#close-wishlist-btn"
    )!.addEventListener("click", () => {
      document.body.classList.remove("overflow-y-hidden");
      wishlist.classList.remove("translate-x-0");
      wishlist.classList.add("translate-x-full");
      wishlistOverlay.classList.remove("translate-x-0");
      wishlistOverlay.classList.add("translate-x-full");
    });

    document.addEventListener("refresh-wishlist", this.refreshWishlist);
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="wishlist" class="fixed h-screen w-full md:w-1/2 lg:w-1/3 top-0 right-0 px-5 pb-5 bg-white overflow-y-auto flex flex-col gap-5 translate-x-full transition-all duration-300 z-50">
            <div class="flex justify-between sticky top-0 bg-white z-10 py-5">
                <button id="close-wishlist-btn" class="cursor-pointer">
                    <i data-lucide="x"></i>
                </button>
                <h2 class="font-bold text-lg">YOUR WISHLIST</h2>
                <div></div>
            </div>
            <div id="target-container" class="flex flex-col gap-4 grow">
            </div>
        </div>
        <div id="wishlist-overlay" class="h-screen w-screen inset-0 bg-black/30 absolute z-20 translate-x-full pointer-events-auto transition-all duration-300"></div>
    `;

    this.render();
  }
  disconnectedCallback() {
    document.removeEventListener("refresh-wishlist", this.refreshWishlist);
  }
}

customElements.define("wish-list", WishList);
