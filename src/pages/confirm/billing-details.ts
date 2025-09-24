import { db } from "../../db";

class BillingDetails extends HTMLElement {
  connectedCallback() {
    const queryParams = new URLSearchParams(location.search);
    const name =
      queryParams.get("first-name") + " " + queryParams.get("last-name");
    const email = queryParams.get("email");
    const phone = queryParams.get("phone");
    const address = queryParams.get("address");

    this.innerHTML = `
          <div
            class="border-[3px] border-gray-200 p-5 space-y-2 rounded-md"
          >
            <h2 class="font-bold text-xl">BILLING DETAILS</h2>
            <div class="flex gap-1">
              <p class="font-semibold">Name:</p>
              <p>${name}</p>
            </div>
            <div class="flex gap-1">
              <p class="font-semibold">Email:</p>
              <p>${email}</p>
            </div>
            <div class="flex gap-1">
              <p class="font-semibold">Phone:</p>
              <p>${phone}</p>
            </div>
            <div class="flex gap-1">
              <p class="font-semibold">Address:</p>
              <p>${address}</p>
            </div>
            <button class="cursor-pointer w-full bg-green-800 text-white py-2 rounded-md">
              Confirm
            </button>
          </div>
    `;

    const confirmButton = this.querySelector("button")!;
    confirmButton.addEventListener("click", async () => {
      await db.cart.clear();
      location.href = "/index.html#hero";
    });
  }
}

customElements.define("billing-details", BillingDetails);
