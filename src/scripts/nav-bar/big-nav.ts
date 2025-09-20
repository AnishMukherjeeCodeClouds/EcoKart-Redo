class BigNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav
          class="flex justify-between items-center px-5 py-3 border-b border-b-gray-500 fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-lg"
        >
          <eco-icon class="size-10"></eco-icon>
          <div class="hidden xl:flex lg:gap-4 lg:grow justify-end pr-40">
            <a class="nav-link text-xl cursor-pointer">Home</a>
            <a href="#categories" class="nav-link text-xl cursor-pointer">Categories</a>
            <a class="nav-link text-xl cursor-pointer">About</a>
            <a class="nav-link text-xl cursor-pointer">Contact</a>
          </div>
          <div class="flex gap-4">
            <input
              id="search"
              type="text"
              placeholder="Search products"
              class="scale-x-0 origin-right transition-all duration-500 py-0.5 px-5 rounded-full bg-gray-200 focus:bg-gray-100 outline-none border-2 border-gray-700 placeholder:italic placeholder:text-lg text-lg"
            />
            <button id="md-search">
              <i id="md-search-search" data-lucide="search" class="size-6"></i>
              <i id="md-search-x" data-lucide="x" class="hidden size-6"></i>
            </button>
            <button>
              <i data-lucide="shopping-cart" class="size-6"></i>
            </button>
            <button>
              <i data-lucide="heart" class="size-6"></i>
            </button>
            <button class="xl:hidden" id="sidebar-open">
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
  }
}

customElements.define("big-nav", BigNav);
