class NewsLetter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        id="newsletter"
        class="w-full bg-stone-900 grid grid-cols-1 md:grid-cols-2 justify-items-center px-4 py-5 gap-3 md:py-8 lg:py-12"
      >
        <div>
          <h2
            class="max-lg:text-center text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-tight"
          >
            Stay Connected With EcoKart
          </h2>
          <p class="max-lg:text-center text-gray-200 lg:text-lg">
            Get eco-friendly tips, exclusive deals, and product launches
            straight to your inbox
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row self-center justify-center gap-2 max-w-xs"
        >
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-white py-2 px-3 rounded-md placeholder:text-center outline-none shadow-md"
          />
          <button
            class="bg-white rounded-md font-semibold py-2 md:px-4 lg:px-8 cursor-pointer hover:bg-stone-700 hover:text-white transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define("newsletter-section", NewsLetter);
