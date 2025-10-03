import { products } from "../../products";
import { getRandomValues } from "../../utils";

class MoreProducts extends HTMLElement {
  connectedCallback() {
    const threeProducts = getRandomValues(products, 3);
    const productString = threeProducts
      .map(
        (p) => `
              <a href="/product.html?id=${p.id}" class="cursor-pointer group">
                <div class="w-[200px] h-[200px] rounded-md overflow-hidden">
                  <img
                    class="h-full w-full object-cover rounded-md group-hover:scale-[1.08] transition-all duration-300"
                    src="${p.imgUrl}"
                    alt="${p.name}"
                  />
                </div>
                <div>
                  <p class="text-center font-bold">${p.name}</p>
                  <p class="text-center text-gray-700">${p.category}</p>
                  <p class="text-center text-lime-800">₹${p.price}</p>
                </div>
              </a>
      `
      )
      .join("\n");

    this.innerHTML = `
          <div class="px-5 space-y-3 lg:space-y-4 pt-4">
            <h2 class="text-lime-800 font-bold text-lg text-center lg:text-xl">
              Shop more products
            </h2>
            <div
              class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 lg:gap-10"
            >
              ${productString}
            </div>
          </div>
    `;
  }
}

customElements.define("more-products", MoreProducts);
