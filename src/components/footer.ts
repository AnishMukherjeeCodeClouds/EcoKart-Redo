class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div
            class="p-4 py-6 space-y-4 flex flex-col md:flex-row md:justify-between lg:justify-around md:p-10"
            >
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                <eco-icon class="size-10"></eco-icon>
                <p class="text-green-900 text-xl">EcoKart</p>
                </div>
                <p class="text-gray-600 text-sm">
                Eco-friendly essentials for everyday living.
                </p>
                <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <i data-lucide="navigation" class="text-gray-600"></i>
                    <p class="text-gray-600 text-sm">
                    3rd Street, 4th Block, Kolkata
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <i data-lucide="phone" class="text-gray-600"></i>
                    <p class="text-gray-600 text-sm">8232929434</p>
                </div>
                <div class="flex items-center gap-2">
                    <i data-lucide="mail" class="text-gray-600"></i>
                    <p class="text-gray-600 text-sm">business@ecokart.com</p>
                </div>
                </div>
            </div>
            <div class="space-y-2">
                <p class="font-semibold text-gray-800">OUR STORES</p>
                <p class="text-gray-600 text-sm">Mumbai</p>
                <p class="text-gray-600 text-sm">Delhi</p>
                <p class="text-gray-600 text-sm">Kolkata</p>
                <p class="text-gray-600 text-sm">Bangalore</p>
                <p class="text-gray-600 text-sm">Hyderabad</p>
                <p class="text-gray-600 text-sm">Pune</p>
            </div>
            <div class="space-y-2">
                <p class="font-semibold text-gray-800">USEFUL LINKS</p>
                <p class="text-gray-600 text-sm">Privacy Policy</p>
                <p class="text-gray-600 text-sm">Returns</p>
                <p class="text-gray-600 text-sm">Terms & Conditions</p>
                <p class="text-gray-600 text-sm">Contact Us</p>
                <p class="text-gray-600 text-sm">Latest News</p>
                <p class="text-gray-600 text-sm">Our Sitemap</p>
            </div>
            <div class="space-y-2">
                <p class="font-semibold text-gray-800">OUR SOCIALS</p>
                <div class="flex gap-4">
                <i data-lucide="twitter" class="size-5 lg:size-6"></i>
                <i data-lucide="facebook" class="size-5 lg:size-6"></i>
                <i data-lucide="instagram" class="size-5 lg:size-6"></i>
                <i data-lucide="youtube" class="size-5 lg:size-6"></i>
                </div>
            </div>
            </div>
            <div
            class="border-t border-gray-400 py-4 text-center md:py-5 bg-stone-900 text-white"
            >
            ECOKART &copy; 2025, ALL RIGHTS RESERVED
            </div>
        </footer>
    `;
  }
}

customElements.define("footer-section", Footer);
