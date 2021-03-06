/**
 * Custom element to switch the display of prices.
 */
class PriceToggle extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <span class="price-toggle__slider">
                <span class="price-toggle__toggle"></span>
            </span>`;
    }
}

customElements.define("price-toggle", PriceToggle, { extends: "button" });
