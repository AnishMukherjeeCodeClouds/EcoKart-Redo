import { db } from "../../../db";

class ProductCard extends HTMLElement {
  connectedCallback() {
    const productId = parseInt(this.getAttribute("product-id") ?? "1");
    const productName = this.getAttribute("product-name") ?? "";
    const imgUrl = this.getAttribute("img-url") ?? "";
    const productLowPrice = this.getAttribute("product-low-price") ?? "";
    const productHighPrice = this.getAttribute("product-high-price") ?? "";

    this.innerHTML = `
          <div class="w-[200px] md:w-[220px] lg:w-[275px] flex flex-col rounded-md shadow-md group">
            <a
              href="/product.html?id=${productId}"
              class="w-full h-[200px] md:h-[220px] lg:h-[275px] rounded-t-md overflow-hidden">
              <img
                class="h-full w-full object-cover object-[30%_30%] rounded-t-md group-hover:scale-[1.08] transition-all duration-300"
                src="${imgUrl}"
                alt="${productName}"
                loading="lazy"
              />
            </a>
            <div class="w-full grow py-3 space-y-1">
            <p class="text-center font-semibold lg:text-xl group-hover:font-bold transition-all duration-300">
              <a
              href="/product.html?id=${productId}" >
                ${productName}
              </a>
            </p>
              <p class="text-center font-medium text-lime-800 lg:text-lg">₹${productLowPrice} - ₹${productHighPrice}</p>
              <div class="flex justify-center gap-5">
                <a href="/product.html?id=${productId}">
                  <i title="View product" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="external-link"></i>
                </a>
                <i title="Add to wishlist" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="heart"></i>
                <button class="add-to-cart-btn">
                  <i title="Add to cart" class="hover:text-green-800 transition-all duration-300 cursor-pointer" data-lucide="shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
    `;

    const addToCartBtn =
      this.querySelector<HTMLButtonElement>(".add-to-cart-btn")!;
    addToCartBtn.addEventListener("click", async () => {
      await db.cart.add({ productId, quantity: 1 });
      this.dispatchEvent(
        new CustomEvent("refresh-cart-counter", { bubbles: true })
      );
    });
  }
}

customElements.define("product-card", ProductCard);
