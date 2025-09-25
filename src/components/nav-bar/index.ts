import "./big-nav";
import "./mobile-nav";
import "./search-bar";
import "./side-bar";
import "./wish-list";

class BigNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hidden md:block">
        <big-nav></big-nav>
      </div>
      <div class="md:hidden">
        <mobile-nav></mobile-nav>
        <search-bar></search-bar>
      </div>
      <wish-list></wish-list>
    `;
  }
}

customElements.define("nav-bar", BigNav);
