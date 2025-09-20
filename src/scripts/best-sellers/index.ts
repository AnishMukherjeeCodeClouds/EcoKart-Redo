import "./best-seller-card";

class BestSellers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="best-sellers" class="px-4 py-5 space-y-2">
        <div class="flex flex-col items-center gap-0.5 lg:gap-2">
          <h2
            class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight"
          >
            Best Sellers
          </h2>
          <p class="text-gray-700 text-center lg:text-lg">
            Eco-friendly products our customers love the most
          </p>
        </div>
        <div
          class="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full gap-4 py-4 px-1 md:grid md:grid-cols-3 md:place-items-center md:gap-10 md:px-10 lg:px-20 lg:grid-cols-4"
        >
          <best-seller-card
            product-name="Bamboo Cutlery Set"
            img-url="/assets/best sellers/bamboo cutlery set.avif"
            product-low-price="500"
            product-high-price="700"
          ></best-seller-card>
          <best-seller-card
            product-name="Coconut Shell Bowls"
            img-url="/assets/best sellers/coconut shell bowls.avif"
            product-low-price="300"
            product-high-price="500"
          ></best-seller-card>
          <best-seller-card
            product-name="Plant Based Candles"
            img-url="/assets/best sellers/plant based candles.avif"
            product-low-price="100"
            product-high-price="200"
          ></best-seller-card>
          <best-seller-card
            product-name="Paper Straw Set"
            img-url="/assets/best sellers/paper straw set.avif"
            product-low-price="80"
            product-high-price="100"
          ></best-seller-card>
          <best-seller-card
            product-name="Steel Water Bottle"
            img-url="/assets/best sellers/steel water bottle.avif"
            product-low-price="800"
            product-high-price="1200"
          ></best-seller-card>
          <best-seller-card
            product-name="Organic Loofah Sponge"
            img-url="/assets/best sellers/organic loofah sponge.avif"
            product-low-price="150"
            product-high-price="250"
          ></best-seller-card>
          <best-seller-card
            product-name="Bamboo Toothbrush"
            img-url="/assets/best sellers/bamboo toothbrush.avif"
            product-low-price="40"
            product-high-price="70"
          ></best-seller-card>
          <best-seller-card
            product-name="Coconut Plate"
            img-url="/assets/best sellers/coconut plate.avif"
            product-low-price="80"
            product-high-price="130"
          ></best-seller-card>
          <best-seller-card
            product-name="Jute Bag"
            img-url="/assets/best sellers/jute bag.avif"
            product-low-price="100"
            product-high-price="175"
          ></best-seller-card>
          <best-seller-card
            product-name="Reusuable Food Wrap"
            img-url="/assets/best sellers/reusuable food wrap.avif"
            product-low-price="100"
            product-high-price="120"
          ></best-seller-card>
          <best-seller-card
            product-name="Organic Soap Bars"
            img-url="/assets/best sellers/organic soap bars.avif"
            product-low-price="50"
            product-high-price="150"
          ></best-seller-card>
          <best-seller-card
            product-name="Reusuable Cotton Pads"
            img-url="/assets/best sellers/reusable cotton pads.avif"
            product-low-price="200"
            product-high-price="450"
          ></best-seller-card>
        </div>
      </section>
    `;
  }
}

customElements.define("best-sellers-section", BestSellers);
