import { products } from "../../../products";

class FilteredResults extends HTMLElement {
  private currentSearch = "";
  private currentCategory = "";

  filter() {
    console.log(this.currentSearch, this.currentCategory);
    const filteredProducts = products.filter((p) => {
      const matchesCategory =
        !this.currentCategory || p.category === this.currentCategory;
      const matchesSearch =
        !this.currentSearch ||
        p.name.toLowerCase().includes(this.currentSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    const productsString =
      filteredProducts.length > 0
        ? `
      <div
        class="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full gap-4 py-4 px-1 md:grid md:grid-cols-3 md:place-items-center md:gap-10 md:px-10 lg:px-20 lg:grid-cols-4"
      >
      ${filteredProducts
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
        .join("\n")}
      </div>
    `
        : "";

    const filteredResultContainer = this.querySelector("#filtered-results")!;
    let heading = "Featured Products";
    let subtext = "Eco-friendly products our customers love the most";

    if (filteredProducts.length > 0) {
      if (this.currentCategory && this.currentSearch) {
        heading = `Search results in "${this.currentCategory}" for "${this.currentSearch}"`;
        subtext = "Matching eco-friendly products in the selected category";
      } else if (this.currentCategory) {
        heading = `Category: ${this.currentCategory}`;
        subtext = `Discover eco-friendly products in the "${this.currentCategory}" category`;
      } else if (this.currentSearch) {
        heading = `Search results for "${this.currentSearch}"`;
        subtext =
          "Here are the eco-friendly products that match your search term";
      }
    } else {
      heading = "No products found matching your search";
      subtext = "";
    }

    filteredResultContainer.innerHTML = `
    <div class="bg-gray-50 grid grid-cols-1 justify-items-center place-items-center rounded-lg py-5 px-4"
    >
      <div class="flex flex-col items-center gap-0.5 lg:gap-2">
        <h2
          class="text-xl text-center md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight"
        >
          ${heading}
        </h2>
        <p class="text-gray-700 text-center lg:text-lg">
        ${subtext}
        </p>
      </div>
      ${productsString} 
    </div>
      `;
  }

  connectedCallback() {
    this.innerHTML = `
      <div
        id="filtered-results"
        class=""
      >
      </div>
    `;

    document.addEventListener("search-filter", (e) => {
      const customEvent = e as CustomEvent<string>;
      this.currentSearch = customEvent.detail;
      this.filter();
    });

    document.addEventListener("category-filter", (e) => {
      const customEvent = e as CustomEvent<string>;
      this.currentCategory = customEvent.detail;
      this.filter();
    });

    document.addEventListener("clear-filters", () => {
      this.currentSearch = "";
      this.currentCategory = "";
      this.querySelector("#filtered-results")!.innerHTML = ``;
    });
  }
}
customElements.define("filtered-results", FilteredResults);
