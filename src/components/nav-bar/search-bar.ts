class SearchBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="p-4 border-b border-b-gray-500 flex gap-5">
        <input
          id="search"
          type="text"
          placeholder="Search products"
          class="w-full py-1 px-5 rounded-full bg-gray-200 focus:bg-gray-100 outline-none border-2 border-gray-700 placeholder:italic"
        />
        <button id="clear-filters">
          <i data-lucide="eraser" class="size-7"></i>
        </button>
      </div>
    `;

    const searchInput = this.querySelector<HTMLInputElement>("#search")!;
    searchInput.addEventListener("change", () => {
      location.href = "/index.html#filtered-results";
      this.dispatchEvent(
        new CustomEvent("search-filter", {
          bubbles: true,
          detail: searchInput.value,
        })
      );
    });

    const clearFiltersBtn =
      this.querySelector<HTMLButtonElement>("#clear-filters")!;
    clearFiltersBtn.addEventListener("click", () => {
      location.href = "/index.html#products";
      searchInput.value = "";
      this.dispatchEvent(new CustomEvent("clear-filters", { bubbles: true }));
    });
  }
}

customElements.define("search-bar", SearchBar);
