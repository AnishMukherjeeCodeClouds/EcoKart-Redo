import { db } from "../../db";

class BigNav extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
        <nav
          class="flex justify-between items-center px-5 py-3 border-b border-b-gray-500 sticky top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-lg"
        >
          <a href="/index.html#hero">
            <eco-icon class="size-10"></eco-icon>
          </a>
          <div class="hidden xl:flex lg:gap-4 lg:grow justify-end pr-40">
            <a href="/index.html#hero" class="nav-link text-xl cursor-pointer">Home</a>
            <a href="/index.html#categories" class="nav-link text-xl cursor-pointer">Categories</a>
            <a class="nav-link text-xl cursor-pointer">About</a>
            <a class="nav-link text-xl cursor-pointer">Contact</a>
          </div>
          <div class="flex items-center gap-4">
            <input
              id="search"
              type="text"
              placeholder="Search products"
              class="scale-x-0 origin-right transition-all duration-500 py-0.5 px-5 rounded-full bg-gray-200 focus:bg-gray-100 outline-none border-2 border-gray-700 placeholder:italic placeholder:text-lg text-lg"
            />
            <button id="md-search" class="cursor-pointer">
              <i id="md-search-search" data-lucide="search" class="size-6"></i>
              <i id="md-search-x" data-lucide="x" class="hidden size-6"></i>
            </button>
            <button class="cursor-pointer">
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
            <button class="cursor-pointer">
              <i data-lucide="heart" class="size-6"></i>
            </button>
            <button class="xl:hidden cursor-pointer" id="sidebar-open">
              <i data-lucide="menu" class="size-6"></i>
            </button>
          </div>
          <div class="absolute top-full right-0"></div>
        </nav>
        <div class="xl:hidden">
          <side-bar></side-bar>
        </div>
    `;
    document.querySelector("#md-search")!.addEventListener("click", () => {
      const k = document.querySelector("#search")!;
      k.classList.toggle("scale-x-0");
      k.classList.toggle("scale-x-100");

      const searchIcon = document.querySelector("#md-search-search")!;
      const xIcon = document.querySelector("#md-search-x")!;

      searchIcon.classList.toggle("hidden");
      xIcon.classList.toggle("hidden");
    });

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
  }
}

customElements.define("big-nav", BigNav);
