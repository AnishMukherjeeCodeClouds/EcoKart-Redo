class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        id="hero"
        class="w-full h-[65.5dvh] xl:h-[90vh] relative flex items-center"
      >
        <!-- <div class="h-full w-full absolute bg-black/60 inset-0 z-10"></div> -->
        <img
          src="/assets/hero.jpg"
          class="w-full h-full absolute object-cover object-[20%_20%] xl:object-top-left brightness-[30%] lg:brightness-[40%] rotate-y-180"
          alt="Hero image"
        />
        <div id="hero-text" class="z-20 relative px-10 md:px-30">
          <h1
            class="text-4xl md:text-6xl font-extrabold text-white leading-tight relative"
          >
            <div
              class="inline-block opacity-0 transition-all translate-y-8 duration-700"
              >
                <span>Better</span>
                <span class="text-green-600">Products.</span>
            </div>
            <br />
            <div
              class="inline-block opacity-0 delay-200 duration-700 transition-all translate-y-8"
              >
                <span>Better</span>
                <span class="text-emerald-600">Life.</span>
            </div>
          </h1>
          <p
            class="mt-4 text-lg md:text-xl lg:text-2xl text-gray-400 opacity-0 delay-500 transition-all duration-700 translate-y-8"
          >
            Eco-friendly essentials for everyday living.
          </p>
          <p
            class="hidden md:block lg:text-xl max-w-5xl lg:max-w-3xl text-gray-200 mt-2 opacity-0 delay-700 transition-all duration-700 translate-y-8"
          >
            From reusable swaps to sustainable staples, EcoKart brings you
            products that are good for you — and even better for the Earth. Shop
            consciously, without compromise.
          </p>
        </div>
      </section>
    `;

    const heroText = this.querySelector<HTMLDivElement>("#hero-text")!;
    const [e1, e2] = heroText.querySelectorAll("div");
    const [p1, p2] = heroText.querySelectorAll("p");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        [e1, e2, p1, p2].forEach((e: HTMLDivElement | HTMLParagraphElement) => {
          e.classList.remove("opacity-0", "translate-y-8");
          e.classList.remove("opacity-100", "translate-y-0");
        });
      });
    });
  }
}

customElements.define("hero-section", Hero);
