"use strict";

class CustomToggle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.setAttribute("tabindex", 0);
        this.innerHTML = `
            <span class="custom-toggle__slider">
                <span class="custom-toggle__toggle custom-toggle__toggle--on"></span>
            </span>`;
        this.addEventListener("keydown", key => {
            if (key.keyCode === 13) {
                eval(this.getAttribute("onclick"));
            }
        });
    }
}

customElements.define("custom-toggle", CustomToggle);
