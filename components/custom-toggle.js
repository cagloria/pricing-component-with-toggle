"use strict";

class CustomToggle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <span class="custom-toggle__slider">
                <span class="custom-toggle__toggle custom-toggle__toggle--on"></span>
            </span>
        `;
    }
}



customElements.define("custom-toggle", CustomToggle);
