class BestSellers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div
          class="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full gap-4 py-4 px-1 md:grid md:grid-cols-3 md:place-items-center md:gap-10 md:px-10 lg:px-20 lg:grid-cols-4 -translate-x-20 opacity-0 transition-all duration-500"
        >
          <product-card
            product-name="Bamboo Cutlery Set"
            img-url="/assets/best sellers/bamboo cutlery set.avif"
            product-low-price="500"
            product-high-price="700"
          ></product-card>
          <product-card
            product-name="Coconut Shell Bowls"
            img-url="/assets/best sellers/coconut shell bowls.avif"
            product-low-price="300"
            product-high-price="500"
          ></product-card>
          <product-card
            product-name="Plant Based Candles"
            img-url="/assets/best sellers/plant based candles.avif"
            product-low-price="100"
            product-high-price="200"
          ></product-card>
          <product-card
            product-name="Paper Straw Set"
            img-url="/assets/best sellers/paper straw set.avif"
            product-low-price="80"
            product-high-price="100"
          ></product-card>
          <product-card
            product-name="Steel Water Bottle"
            img-url="/assets/best sellers/steel water bottle.avif"
            product-low-price="800"
            product-high-price="1200"
          ></product-card>
          <product-card
            product-name="Organic Loofah Sponge"
            img-url="/assets/best sellers/organic loofah sponge.avif"
            product-low-price="150"
            product-high-price="250"
          ></product-card>
          <product-card
            product-name="Bamboo Toothbrush"
            img-url="/assets/best sellers/bamboo toothbrush.avif"
            product-low-price="40"
            product-high-price="70"
          ></product-card>
          <product-card
            product-name="Coconut Plate"
            img-url="/assets/best sellers/coconut plate.avif"
            product-low-price="80"
            product-high-price="130"
          ></product-card>
          <product-card
            product-name="Jute Bag"
            img-url="/assets/best sellers/jute bag.avif"
            product-low-price="100"
            product-high-price="175"
          ></product-card>
          <product-card
            product-name="Reusuable Food Wrap"
            img-url="/assets/best sellers/reusuable food wrap.avif"
            product-low-price="100"
            product-high-price="120"
          ></product-card>
          <product-card
            product-name="Organic Soap Bars"
            img-url="/assets/best sellers/organic soap bars.avif"
            product-low-price="50"
            product-high-price="150"
          ></product-card>
          <product-card
            product-name="Reusuable Cotton Pads"
            img-url="/assets/best sellers/reusable cotton pads.avif"
            product-low-price="200"
            product-high-price="450"
          ></product-card>
        </div>
    `;
  }
}

customElements.define("best-sellers", BestSellers);
