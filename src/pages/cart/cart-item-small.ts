import type { CartItem } from "../../db";
import type { products } from "../../products";
import { BaseCartItem } from "./base-cart-item";

class CartItemSmall extends BaseCartItem {
  protected renderUI(
    product: (typeof products)[number],
    productInDb: CartItem
  ): string {
    return `
      <div class="flex items-center py-4 gap-5">
        <a href="/product.html?id=${
          this.productId
        }" class="h-[115px] w-[100px] rounded-md">
          <img
            class="h-full w-full object-cover rounded-md"
            src="${product.imgUrl}"
            alt="${product.name}"
          />
        </a>
        <div class="grow flex flex-col gap-1.5">
          <div class="flex justify-between items-center">
            <p class="font-semibold text-gray-700">${product.name}</p>
            <button class="remove-cart-item">
              <i data-lucide="x" class="size-5"></i>
            </button>
          </div>
          <div class="space-y-0.5">
            <div class="flex justify-between">
              <p class="text-gray-600">Price</p>
              <p class="text-gray-600">₹${product.price}</p>
            </div>
            <hr class="border-t-2 border-dotted border-gray-400 w-full mb-1.5"/>
            <div class="flex justify-between items-center">
              <p class="text-gray-600">Quantity</p>
              <div class="quantity-counter flex">
                <button class="bg-lime-800 hover:bg-lime-900 rounded-l-md cursor-pointer">
                  <i data-lucide="minus" class="text-white"></i>
                </button>
                <input
                  type="number"
                  value="${productInDb.quantity}"
                  min="1"
                  max="50"
                  class="text-center outline-none font-mono w-[3ch] px-[0.5ch] border-y border-gray-600"
                />
                <button class="bg-lime-800 hover:bg-lime-900 rounded-r-md cursor-pointer">
                  <i data-lucide="plus" class="text-white"></i>
                </button>
              </div>
            </div>
            <hr class="border-t-2 border-dotted border-gray-400 w-full mt-1.5"/>
            <div class="flex justify-between items-center">
              <p class="text-gray-600">Subtotal</p>
              <p class="text-green-700 font-semibold">₹${
                product.price * productInDb.quantity
              }</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cart-item-small", CartItemSmall);
