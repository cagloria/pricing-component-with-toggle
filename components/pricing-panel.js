"use strict";

class PricingPanel extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let name = this.getAttribute("name");
        let price = this.getAttribute("price");
        let storage = this.getAttribute("storage");
        let userLimit = this.getAttribute("user-limit");
        let sendingLimit = this.getAttribute("sending-limit");

        this.innerHTML = `
            <p class="pricing-panel__title">${name}</p>
            <p class="pricing-panel__price">${price}</p>
            <ul class="pricing-panel__benefits-ul">
                <li class="pricing-panel__benefit">${storage} Storage</li>
                <li class="pricing-panel__benefit">${userLimit} Users Allowed</li>
                <li class="pricing-panel__benefit">Send up to ${sendingLimit}</li>
            </ul>
        
            <button class="button button--learn-more">Learn More</button>
        `;
    }
}

customElements.define("pricing-panel", PricingPanel);
