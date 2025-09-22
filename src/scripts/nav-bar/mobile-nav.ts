class MobileNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav
        class="flex justify-between items-center px-3 py-2 border-b border-b-gray-500"
      >
        <eco-icon class="size-8"></eco-icon>
        <div class="flex gap-3">
          <button>
            <i data-lucide="user" class="size-6"></i>
          </button>
          <button>
            <i data-lucide="shopping-cart" class="size-6"></i>
          </button>
          <button>
            <i data-lucide="heart" class="size-6"></i>
          </button>
          <button id="sidebar-open">
            <i data-lucide="menu" class="size-6"></i>
          </button>
        </div>
      </nav>
      <side-bar></side-bar>
    `;

    this.querySelector<HTMLButtonElement>("#sidebar-open")!.addEventListener(
      "click",
      () => {
        this.dispatchEvent(new CustomEvent("sidebar-open", { bubbles: true }));
      }
    );
  }
}

customElements.define("mobile-nav", MobileNav);
