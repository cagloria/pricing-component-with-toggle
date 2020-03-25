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
            <p class="pricing-panel__price">
                <span class="pricing-panel__price-dollar">$</span>
                <span class="pricing-panel__price-numbers">${price}</span>
            </p>
            <ul class="pricing-panel__benefits-ul">
                <li class="pricing-panel__benefit">${storage} Storage</li>
                <li class="pricing-panel__benefit">${userLimit} Users Allowed</li>
                <li class="pricing-panel__benefit">Send up to ${sendingLimit}</li>
            </ul>
        
            <button class="button pricing-panel__button">Learn More</button>
        `;
    }
}

customElements.define("pricing-panel", PricingPanel);
