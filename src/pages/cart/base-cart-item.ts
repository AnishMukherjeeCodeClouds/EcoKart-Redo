import { createIcons, icons } from "lucide";
import { db, type CartItem } from "../../db";
import { products } from "../../products";

export class BaseCartItem extends HTMLElement {
  protected productId = parseInt(this.getAttribute("product-id") ?? "1");
  protected dbId = parseInt(this.getAttribute("db-id") ?? "1");

  async connectedCallback() {
    await this.render();
  }

  protected async render() {
    const product = products.find((p) => p.id === this.productId);
    const productInDb = await db.cart.get(this.dbId);

    if (!product || !productInDb) {
      this.innerHTML = ``;
      return;
    }

    // Let subclasses define the HTML template
    this.innerHTML = this.renderUI(product, productInDb);

    createIcons({ icons });

    this.attachEvents();
  }

  /** subclasses must override */
  protected renderUI(
    _product: (typeof products)[number],
    _productInDb: CartItem
  ): string {
    throw new Error("renderUI must be implemented by subclass");
  }

  protected attachEvents() {
    const quantityCounter = this.querySelector(
      ".quantity-counter"
    ) as HTMLDivElement;
    if (!quantityCounter) return;

    const [quantityDec, quantityInc] =
      quantityCounter.querySelectorAll("button");
    const quantityInput = quantityCounter.querySelector(
      "input"
    ) as HTMLInputElement;

    // Decrement
    quantityDec.addEventListener("click", () => {
      quantityInput.value = String(
        Math.max(parseInt(quantityInput.value) - 1, 1)
      );
      quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // Increment
    quantityInc.addEventListener("click", () => {
      quantityInput.value = String(
        Math.min(parseInt(quantityInput.value) + 1, 50)
      );
      quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // Quantity change → update DB
    quantityInput.addEventListener("change", async () => {
      quantityInput.reportValidity();
      if (quantityInput.checkValidity()) {
        await db.cart.update(this.dbId, {
          quantity: parseInt(quantityInput.value),
        });
        this.dispatchEvent(
          new CustomEvent("refresh-summary", { bubbles: true })
        );
        this.render();
      }
    });

    // Remove item
    const removeItemBtn = this.querySelector(
      ".remove-cart-item"
    ) as HTMLButtonElement;
    if (removeItemBtn) {
      removeItemBtn.addEventListener("click", async () => {
        await db.cart.delete(this.dbId);
        this.dispatchEvent(
          new CustomEvent("refresh-summary", { bubbles: true })
        );
        this.dispatchEvent(new CustomEvent("refresh-cart", { bubbles: true }));
        this.dispatchEvent(
          new CustomEvent("refresh-cart-counter", { bubbles: true })
        );
      });
    }
  }
}
