class PricingPanel extends HTMLLIElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let name = this.dataset.name;
        let price = this.dataset.price;
        let storage = this.dataset.storage;
        let userLimit = this.dataset.user;
        let sendingLimit = this.dataset.sending;

        this.innerHTML = `
            <p class="pricing-panel__title">${name}</p>

            <p class="pricing-panel__price">
                <span class="pricing-panel__price-dollar">$</span>
                <span class="pricing-panel__price-numbers">${price}</span>
            </p>
            
            <ul class="pricing-panel__benefits">
                <li>${storage} Storage</li>
                <li>${userLimit} Users Allowed</li>
                <li>Send up to ${sendingLimit}</li>
            </ul>
            
            <button class="button pricing-panel__button">Learn More</button>
        `;
    }
}

customElements.define("pricing-panel", PricingPanel, { extends: "li" });
