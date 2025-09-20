class DOTD extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        id="deal-of-the-day"
        class="w-full bg-gradient-to-bl from-amber-100 via-lime-100 to-emerald-100 grid grid-cols-1 justify-items-center gap-4 py-6 md:py-10 md:grid-cols-2 lg:gap-x-40"
      >
        <div
          class="flex flex-col items-center gap-2 md:row-start-1 md:col-start-2 lg:justify-self-start lg:pl-14 self-end"
        >
          <h2
            class="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Deal Of The Day
          </h2>
          <span
            class="bg-red-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow"
          >
            🔥 Limited Time Offer
          </span>
        </div>
        <div
          class="w-[70%] h-[300px] lg:w-[400px] lg:h-[400px] rounded-md relative shadow-md shadow-gray-700 overflow-hidden md:col-start-1 md:row-start-1 md:row-span-2 lg:justify-self-end"
        >
          <img
            class="h-full w-full object-cover rounded-md hover:scale-[1.08] transition-all duration-300"
            src="/assets/best sellers/steel water bottle.avif"
            alt="Steel Water Bottle"
          />
        </div>
        <div
          class="flex flex-col items-center gap-4 text-center md:col-start-2 md:row-start-2 lg:justify-self-start"
        >
          <div class="flex flex-col items-center">
            <p class="text-xl md:text-2xl lg:text-3xl font-bold">
              Steel Water Bottle
            </p>
            <p class="text-sm md:text-base lg:text-lg text-gray-900">
              Durable, reusable, and keeps drinks cold all day
            </p>
            <div class="flex items-center gap-2">
              <p class="line-through text-gray-700">₹1200</p>
              <p class="text-green-700 text-2xl font-extrabold">₹800</p>
            </div>
            <p class="text-sm text-red-600 font-semibold">
              ⏳ 12h : 30m : 05s left
            </p>
          </div>
          <button
            class="w-[80%] max-w-xs flex items-center justify-center gap-2 bg-white py-2 px-4 rounded-md shadow-md shadow-gray-700 hover:bg-lime-800 group transition-all duration-300"
          >
            <p
              class="text-green-800 group-hover:text-white transition-all duration-300 font-semibold"
            >
              Grab The Deal
            </p>
            <i
              class="text-green-800 group-hover:text-white transition-all duration-300"
              data-lucide="shopping-cart"
            ></i>
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define("deal-of-the-day-section", DOTD);
