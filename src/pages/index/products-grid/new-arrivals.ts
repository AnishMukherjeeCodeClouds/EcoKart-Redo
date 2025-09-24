import { products } from "../../../products";
import { getRandomObjects } from "../../../utils";

class NewArrivals extends HTMLElement {
  connectedCallback() {
    const productsString = getRandomObjects(products, 12)
      .map(
        (p) => `
          <product-card
            product-id="${p.id}"
            product-name="${p.name}"
            img-url="${p.imgUrl}"
            product-low-price="${p.price}"
            product-high-price="${
              p.price + Math.round(100 + 100 * Math.random())
            }"
          ></product-card>
      `
      )
      .join("\n");
    this.innerHTML = `
        <div
          class="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full gap-4 py-4 px-1 md:grid md:grid-cols-3 md:place-items-center md:gap-10 md:px-10 lg:px-20 lg:grid-cols-4 -translate-x-20 opacity-0 transition-all duration-500"
        >
          ${productsString}
        </div>
    `;
  }
}

customElements.define("new-arrivals", NewArrivals);
