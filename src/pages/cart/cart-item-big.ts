import { type CartItem } from "../../db";
import { products } from "../../products";
import { BaseCartItem } from "./base-cart-item";

class CartItemBig extends BaseCartItem {
  protected renderUI(
    product: (typeof products)[number],
    productInDb: CartItem
  ): string {
    return `
      <div class="grid grid-cols-7 place-items-center">
        <button class="cursor-pointer remove-cart-item">
          <i data-lucide="x" class="size-5"></i>
        </button>
        <a href="/product.html?id=${
          this.productId
        }" class="h-[100px] w-[100px] rounded-md">
          <img
            class="h-full w-full object-cover rounded-md"
            src="${product.imgUrl}"
            alt="${product.name}"
          />
        </a>
        <p class="font-semibold text-gray-700 text-center col-span-2">${
          product.name
        }</p>
        <p class="text-gray-600">₹${product.price}</p>
        <div class="quantity-counter flex">
          <button
            class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-l-md cursor-pointer"
          >
            <i data-lucide="minus" class="text-white"></i>
          </button>
          <input
            type="number"
            value="${productInDb.quantity}"
            min="1"
            max="50"
            class="text-center outline-none font-mono w-[3ch] px-[0.5ch] border-y border-gray-600"
          />
          <button
            class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-r-md cursor-pointer"
          >
            <i data-lucide="plus" class="text-white"></i>
          </button>
        </div>
        <p class="text-green-700 font-semibold text-center">₹${
          product.price * productInDb.quantity
        }</p>
      </div>
    `;
  }
}

// class CartItem extends HTMLElement {
//   private productId = parseInt(this.getAttribute("product-id") ?? "1");
//   private dbId = parseInt(this.getAttribute("db-id") ?? "1");

//   async render() {
//     const product = products.find((p) => p.id === this.productId);
//     if (product == undefined) {
//       this.innerHTML = ``;
//       return;
//     }
//     const productInDb = await db.cart.get(this.dbId);

//     if (productInDb == undefined) {
//       this.innerHTML = ``;
//       return;
//     }

// this.innerHTML = `
//   <div class="grid grid-cols-7 place-items-center">
//     <button class="cursor-pointer remove-cart-item">
//       <i data-lucide="x" class="size-5"></i>
//     </button>
//     <a href="/product.html?id=${
//       this.productId
//     }" class="h-[100px] w-[100px] rounded-md">
//       <img
//         class="h-full w-full object-cover rounded-md"
//         src="${product.imgUrl}"
//         alt="${product.name}"
//       />
//     </a>
//     <p class="font-semibold text-gray-700 text-center col-span-2">${
//       product.name
//     }</p>
//     <p class="text-gray-600">₹${product.price}</p>
//     <div class="quantity-counter flex">
//       <button
//         class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-l-md cursor-pointer"
//       >
//         <i data-lucide="minus" class="text-white"></i>
//       </button>
//       <input
//         type="number"
//         value="${productInDb.quantity}"
//         min="1"
//         max="50"
//         class="text-center outline-none font-mono w-[3ch] px-[0.5ch] border-y border-gray-600"
//       />
//       <button
//         class="bg-lime-800 hover:bg-lime-900 transition-all duration-300 rounded-r-md cursor-pointer"
//       >
//         <i data-lucide="plus" class="text-white"></i>
//       </button>
//     </div>
//     <p class="text-green-700 font-semibold text-center">₹${
//       product.price * productInDb.quantity
//     }</p>
//   </div>
// `;

//     createIcons({ icons });

//     this.attachEvents();
//   }

//   attachEvents() {
//     // Manage item quantity
//     const quantityCounter =
//       this.querySelector<HTMLDivElement>(".quantity-counter")!;

//     const [quantityDec, quantityInc] =
//       quantityCounter.querySelectorAll("button");
//     const quantityInput = quantityCounter.querySelector("input")!;

//     quantityDec.addEventListener("click", () => {
//       quantityInput.value = String(
//         Math.max(parseInt(quantityInput.value) - 1, 1)
//       );
//       quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
//     });

//     quantityInc.addEventListener("click", () => {
//       quantityInput.value = String(
//         Math.min(parseInt(quantityInput.value) + 1, 50)
//       );
//       quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
//     });

//     quantityInput.addEventListener("change", async () => {
//       quantityInput.reportValidity();

//       if (quantityInput.checkValidity()) {
//         await db.cart.update(this.dbId, {
//           quantity: parseInt(quantityInput.value),
//         });

//         this.dispatchEvent(
//           new CustomEvent("refresh-summary", { bubbles: true })
//         );

//         this.render();
//       }
//     });

//     // Remove cart item
//     const removeItemBtn =
//       this.querySelector<HTMLButtonElement>(".remove-cart-item")!;

//     removeItemBtn.addEventListener("click", async () => {
//       await db.cart.delete(this.dbId);

//       this.dispatchEvent(new CustomEvent("refresh-summary", { bubbles: true }));
//       this.dispatchEvent(new CustomEvent("refresh-cart", { bubbles: true }));
//     });
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

customElements.define("cart-item-big", CartItemBig);
