import { createIcons, icons } from "lucide";
import "./best-sellers";
import "./new-arrivals";
import "./product-card";
import "./trending";

class ProductsGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="products" class="px-4 py-5 space-y-2">
        <div class="flex flex-col items-center gap-0.5 lg:gap-2">
          <h2
            class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight"
          >
            Featured Products
          </h2>
          <p class="text-gray-700 text-center lg:text-lg">
            Eco-friendly products our customers love the most
          </p>
        </div>
        <div id="switcher" class="flex justify-center gap-3">
          <button title="best-sellers" class="text-lime-900 font-bold transition-all duration-300 lg:text-lg cursor-pointer hover:underline">Best Sellers</button> 
          <button title="trending-prods" class="font-semibold transition-all duration-300 lg:text-lg cursor-pointer hover:underline">Trending</button> 
          <button title="new-arrivals" class="font-semibold transition-all duration-300 lg:text-lg cursor-pointer hover:underline">New Arrivals</button> 
        </div>
        <div id="container">
          <best-sellers></best-sellers>
        </div>
      </section>
    `;

    const switcherButtons =
      this.querySelectorAll<HTMLButtonElement>("#switcher button");
    const gridContainer = this.querySelector("#container")!;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gridContainer
          .querySelector("div")!
          .classList.remove("-translate-x-20", "opacity-0");
        gridContainer
          .querySelector("div")!
          .classList.add("translate-x-0", "opacity-100");
      });
    });

    switcherButtons.forEach((sb) =>
      sb.addEventListener("click", () => {
        switcherButtons.forEach((s) => {
          s.classList.remove("font-bold");
          s.classList.remove("text-lime-900");
          s.classList.add("font-semibold");
        });
        const title = sb.getAttribute("title") ?? "";
        gridContainer.innerHTML = `<${title}></${title}>`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            sb.classList.remove("font-semibold");
            sb.classList.add("font-bold");
            sb.classList.add("text-lime-900");
            gridContainer
              .querySelector("div")!
              .classList.remove("-translate-x-20", "opacity-0");
            gridContainer
              .querySelector("div")!
              .classList.add("translate-x-0", "opacity-100");
          });
        });
        createIcons({ icons });
      })
    );
  }
}

customElements.define("products-grid-section", ProductsGrid);
