"use strict";

class CustomToggle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <input type="checkbox">
        `;
    }
}

customElements.define("custom-toggle", CustomToggle);
