class Testimonials extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="testimonials" class="bg-gray-50 py-10 px-6">
        <h2
          class="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8"
        >
          What Our Customers Say
        </h2>

        <div
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:px-4 max-w-6xl mx-auto"
        >
          <div
            class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src="https://i.pravatar.cc/80?img=11"
              alt="Customer 1"
              class="w-16 h-16 rounded-full mb-4 shadow"
            />
            <p class="font-semibold text-gray-900">Aarav Sharma</p>
            <p class="text-yellow-500 text-sm mb-2">★★★★★</p>
            <p class="italic text-gray-700">
              “EcoKart has changed the way I shop. The products are high quality
              and I feel good about reducing plastic waste.”
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Customer 2"
              class="w-16 h-16 rounded-full mb-4 shadow"
            />
            <p class="font-semibold text-gray-900">Aakash Kapoor</p>
            <p class="text-yellow-500 text-sm mb-2">★★★★☆</p>
            <p class="italic text-gray-700">
              “Stylish, eco-friendly, and affordable! I always recommend EcoKart
              to my friends.”
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src="https://i.pravatar.cc/80?img=13"
              alt="Customer 3"
              class="w-16 h-16 rounded-full mb-4 shadow"
            />
            <p class="font-semibold text-gray-900">Rahul Verma</p>
            <p class="text-yellow-500 text-sm mb-2">★★★★★</p>
            <p class="italic text-gray-700">
              “I bought the bamboo cutlery set and it’s amazing. Durable,
              reusable, and looks great too.”
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src="https://i.pravatar.cc/80?img=21"
              alt="Customer 4"
              class="w-16 h-16 rounded-full mb-4 shadow"
            />
            <p class="font-semibold text-gray-900">Simran Kaur</p>
            <p class="text-yellow-500 text-sm mb-2">★★★★★</p>
            <p class="italic text-gray-700">
              “The jute bag I ordered is super sturdy and stylish. It’s my go-to
              for grocery shopping now.”
            </p>
          </div>
        </div>
      </section>
        `;
  }
}

customElements.define("testimonials-section", Testimonials);
