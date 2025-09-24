class CategoryCard extends HTMLElement {
  connectedCallback() {
    const categoryName = this.getAttribute("category-name") ?? "";
    const imgUrl = this.getAttribute("img-url") ?? "";

    this.innerHTML = `
        <div
          class="h-[175px] min-w-[175px] md:h-[190px] md:min-w-[190px] lg:h-[200px] lg:min-w-[200px] rounded-lg relative flex items-end group overflow-hidden shadow-md shadow-black cursor-pointer category-card"
        >
          <img
            class="absolute h-full w-full object-cover rounded-lg shadow-md shadow-black group-hover:scale-[1.08] transition-all duration-300"
            src="${imgUrl}"
            alt="${categoryName}"
          />
          <p
            class="relative z-20 bg-white w-full text-center py-1.5 rounded-b-lg lg:text-lg group-hover:font-semibold transition-all duration-300"
          >
            ${categoryName}
          </p>
        </div>
    `;

    const categoryCard = this.querySelector<HTMLDivElement>(".category-card")!;
    categoryCard.addEventListener("click", () => {
      location.href = "/index.html#filtered-results";
      this.dispatchEvent(
        new CustomEvent("category-filter", {
          bubbles: true,
          detail: categoryName,
        })
      );
    });
  }
}

customElements.define("category-card", CategoryCard);
