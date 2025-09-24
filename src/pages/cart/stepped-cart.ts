import "./cart-checkout";
import "./cart-item-and-summary";

const components = ["cart-item-and-summary", "cart-checkout"];

class SteppedCart extends HTMLElement {
  render() {
    const comNo = parseInt(window.location.hash.split("#")[1]) || 0;
    this.innerHTML = `<${components[comNo]}></${components[comNo]}>`;

    document.addEventListener("move-to-checkout", () => {
      location.href = "/cart.html#1";
      this.render();
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("stepped-cart", SteppedCart);
