/**
 * Custom element to switch the display of prices.
 */
class PriceToggle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute("tabindex", 0);
        this.innerHTML = `
            <span class="price-toggle__slider">
                <span 
                    class="price-toggle__toggle price-toggle__toggle--on"
                ></span>
            </span>`;
        this.addEventListener("keydown", (key) => {
            if (key.keyCode === 13) {
                eval(this.getAttribute("onclick"));
            }
        });
    }
}

customElements.define("price-toggle", PriceToggle);
