import { db } from "../../db";
import { products } from "../../products";

class Info extends HTMLElement {
  connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id") ?? "1");
    const targetProduct = products.find((p) => p.id === id);

    this.innerHTML = `
        <div
          class="flex flex-col px-9 gap-3 md:pr-14 lg:pr-64 md:place-self-center"
        >
          <h2 class="text-2xl font-bold text-gray-800">${targetProduct?.name}</h2>
          <p class="text-lime-800 font-semibold text-lg">₹${targetProduct?.price}</p>
          <p class="text-sm text-gray-700 lg:text-base">
          ${targetProduct?.subtitle}
          </p>
          <div class="flex gap-2">
            <div id="quantity-counter" class="flex shadow-md">
              <button
                class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-l-md px-1 py-0.5 cursor-pointer"
              >
                <i data-lucide="minus" class="text-white"></i>
              </button>
              <input
                type="number"
                min="1"
                max="50"
                value="1"
                class="text-center outline-none"
              />
              <button
                class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-r-md px-1 py-0.5 cursor-pointer"
              >
                <i data-lucide="plus" class="text-white"></i>
              </button>
            </div>
            <button
              id="add-to-cart-btn"
              class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 text-white px-4 py-1 rounded-md cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
    `;

    const quantityCounter =
      this.querySelector<HTMLDivElement>("#quantity-counter")!;

    const [quantityDec, quantityInc] =
      quantityCounter.querySelectorAll("button");
    const quantityInput = quantityCounter.querySelector("input")!;

    quantityDec.addEventListener("click", () => {
      quantityInput.value = String(
        Math.max(parseInt(quantityInput.value) - 1, 1)
      );
      quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
    });

    quantityInc.addEventListener("click", () => {
      quantityInput.value = String(
        Math.min(parseInt(quantityInput.value) + 1, 50)
      );
      quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
    });

    quantityInput.addEventListener("change", () => {
      quantityInput.reportValidity();
    });

    const addToCartBtn =
      this.querySelector<HTMLButtonElement>("#add-to-cart-btn")!;
    addToCartBtn.addEventListener("click", async () => {
      if (!quantityInput.checkValidity()) {
        quantityInput.reportValidity();
        return;
      }
      await db.cart.add({
        productId: targetProduct?.id ?? 1,
        quantity: parseInt(quantityInput.value),
      });
      this.dispatchEvent(
        new CustomEvent("refresh-cart-counter", { bubbles: true })
      );
    });
  }
}

customElements.define("prod-info", Info);
