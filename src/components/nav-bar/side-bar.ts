function openSidebar(sidebar: HTMLDivElement, overlay: HTMLDivElement) {
  sidebar.classList.toggle("-left-full");
  sidebar.classList.toggle("left-0");

  overlay.classList.remove("-left-full");
  overlay.classList.add("left-0");
}

function closeSidebar(sidebar: HTMLDivElement, overlay: HTMLDivElement) {
  sidebar.classList.toggle("-left-full");
  sidebar.classList.toggle("left-0");

  overlay.classList.add("-left-full");
  overlay.classList.remove("left-0");
}

class SideBar extends HTMLElement {
  connectedCallback() {
    // const classes = this.getAttribute("class") || "";
    this.innerHTML = `
      <div id="overlay" class="absolute top-0 -left-full h-dvh w-dvw bg-black/30 z-20 pointer-events-auto transition-all duration-300"></div>
      <div
        id="sidebar"
        class="absolute top-0 -left-full w-[90dvw] md:w-[40dvw] h-dvh bg-white z-20 px-14 pt-16 py-12 flex flex-col shadow-xl shadow-gray-500 justify-between transition-all duration-300"
      >
        <button id="sidebar-close" class="absolute top-5 left-5">
          <i data-lucide="x" class="size-7"></i>
        </button>
        <div class="flex flex-col">
        <a href="/index.html#hero" class="text-start py-3 px-2 text-xl md:text-2xl">Home</a>
        <a href="/index.html#categories" class="text-start py-3 px-2 text-xl md:text-2xl">Categories</a>
        <a class="text-start py-3 px-2 text-xl md:text-2xl">About us</a>
        <a class="text-start py-3 px-2 text-xl md:text-2xl">Contact us</a>
        </div>
        <div class="flex gap-2 md:gap-3">
          <i data-lucide="twitter" class="size-7 md:size-9"></i>
          <i data-lucide="facebook" class="size-7 md:size-9"></i>
          <i data-lucide="instagram" class="size-7 md:size-9"></i>
          <i data-lucide="youtube" class="size-7 md:size-9"></i>
        </div>
      </div>
    `;

    const sidebar = this.querySelector<HTMLDivElement>("#sidebar")!;
    const overlay = document.querySelector<HTMLDivElement>("#overlay")!;

    document.addEventListener("sidebar-open", () =>
      openSidebar(sidebar, overlay)
    );

    this.querySelector<HTMLButtonElement>("#sidebar-close")?.addEventListener(
      "click",
      () => closeSidebar(sidebar, overlay)
    );

    this.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", () => closeSidebar(sidebar, overlay));
    });
  }
}

customElements.define("side-bar", SideBar);
