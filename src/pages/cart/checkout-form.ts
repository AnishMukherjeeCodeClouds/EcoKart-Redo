class CheckoutForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="p-6">
          <h2 class="text-xl font-bold">BILLING DETAILS</h2>
          <form class="flex flex-col gap-2">
            <div class="flex flex-col gap-2 lg:flex-row">
              <div class="flex flex-col gap-0.5 lg:basis-1/2">
                <label for="first-name"
                  >First name <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  class="bg-gray-50 py-1 px-3 border-2 border-gray-300 rounded-md outline-none focus:bg-white"
                  required
                />
              </div>
              <div class="flex flex-col gap-0.5 lg:grow">
                <label for="last-name"
                  >Last name <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  class="bg-gray-50 py-1 px-3 border-2 border-gray-300 rounded-md outline-none focus:bg-white"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-0.5">
              <label for="email"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="bg-gray-50 py-1 px-3 border-2 border-gray-300 rounded-md outline-none focus:bg-white"
                required
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <label for="phone"
                >Phone <span class="text-red-500">*</span></label
              >
              <input
                type="number"
                id="phone"
                name="phone"
                class="bg-gray-50 py-1 px-3 border-2 border-gray-300 rounded-md outline-none focus:bg-white"
                required
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <label for="address"
                >Street address <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                id="address"
                name="address"
                class="bg-gray-50 py-1 px-3 border-2 border-gray-300 rounded-md outline-none focus:bg-white"
                required
              />
            </div>
            <button id="place-order-btn"
             type="submit" class="bg-lime-800 text-white py-2 w-full rounded-md mt-2">
              Place order
            </button>
          </form>
        </div>
        `;

    const checkoutForm = this.querySelector("form")!;
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!checkoutForm.checkValidity()) {
        checkoutForm.reportValidity();
        return;
      }

      let queryString = "";
      const billingData = Object.fromEntries(new FormData(checkoutForm));
      for (let k of Object.keys(billingData)) {
        queryString += `${k}=${billingData[k]}&`;
      }
      location.href = `/confirm.html?${queryString}`;
    });
  }
}

customElements.define("checkout-form", CheckoutForm);
