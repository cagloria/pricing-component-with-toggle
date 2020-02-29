"use strict";

class CustomToggle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <span class="custom-toggle__slider">
                <span class="custom-toggle__toggle custom-toggle__toggle--on"></span>
            </span>`;
    }
    // TODO: Add listener for "enter" key
}

customElements.define("custom-toggle", CustomToggle);
