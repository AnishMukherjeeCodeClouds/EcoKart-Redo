import "./category-card";

class Categories extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        id="categories"
        class="flex flex-col lg:flex-row items-center bg-gradient-to-tr from-lime-100 to-green-100 py-5 px-4 md:px-10 lg:py-14 lg:px-20 gap-3 lg:gap-20"
      >
        <div class="flex flex-col max-lg:items-center gap-0.5 lg:gap-2">
          <h2
            class="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Explore Our Categories
          </h2>
          <p class="lg:hidden text-gray-700 text-center">Choose products that care for you and the planet</p>
          <p class="hidden lg:block text-xl text-gray-900">
            From everyday essentials to unique eco-friendly picks, explore
            categories that bring comfort to your home and care to the planet.
          </p>
        </div>
        <div
          class="flex overflow-x-scroll max-lg:[scrollbar-width:none] max-lg:[-ms-overflow-style:none] max-lg:[&::-webkit-scrollbar]:hidden max-w-full gap-4 py-4 px-1 md:gap-8 lg:max-w-2xl"
        >
          <category-card
            category-name="Home & Living"
            img-url="/assets/categories/home and living.avif"
          ></category-card>
          <category-card
            category-name="Personal Care"
            img-url="/assets/categories/personal care.avif"
          ></category-card>
          <category-card
            category-name="Food & Wellness"
            img-url="/assets/categories/food and wellness.avif"
          ></category-card>
          <category-card
            category-name="Fashion & Lifestyle"
            img-url="/assets/categories/fashion and lifestyle.avif"
          ></category-card>
          <category-card
            category-name="Kids & Baby"
            img-url="/assets/categories/kids and baby.avif"
          ></category-card>
          <category-card
            category-name="Travel & Outdoors"
            img-url="/assets/categories/travel and outdoors.avif"
          ></category-card>
          <category-card
            category-name="Cleaning & Essentials"
            img-url="/assets/categories/cleaning and essentials.avif"
          ></category-card>
          <category-card
            category-name="Pet Care"
            img-url="/assets/categories/pet care.avif"
          ></category-card>
        </div>
      </section>
    `;
  }
}

customElements.define("categories-section", Categories);
