class SearchBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="p-4 border-b border-b-gray-500">
        <input
          type="text"
          placeholder="Search products"
          class="w-full py-1 px-5 rounded-full bg-gray-200 focus:bg-gray-100 outline-none border-2 border-gray-700 placeholder:italic"
        />
      </div>
    `;
  }
}

customElements.define("search-bar", SearchBar);
