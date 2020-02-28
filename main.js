"use strict";

var PACKAGES = (function() {
    const packages = [
        {
            name: "Basic",
            priceMonthly: "$19.99",
            priceYearly: "$199.99",
            storage: "500 GB",
            userLimit: 2,
            sendingLimit: "3 GB"
        },
        {
            name: "Professional",
            priceMonthly: "$24.99",
            priceYearly: "$249.99",
            storage: "1 TB",
            userLimit: 5,
            sendingLimit: "10 GB"
        },
        {
            name: "Master",
            priceMonthly: "$39.99",
            priceYearly: "$399.99",
            storage: "2 TB",
            userLimit: 10,
            sendingLimit: "20 GB"
        }
    ];
    return {
        getPackages: function() {
            return packages;
        }
    };
})();

function changePriceDisplay() {
    let isMonthly = document.getElementById("pricing-toggle").checked;
    const packages = PACKAGES.getPackages();

    packages.forEach(element => {
        let index = packages.indexOf(element);
        let pricingPanel = document.getElementById(`panel-${index}`);
        let panelPrice = pricingPanel.getElementsByClassName(
            "pricing-panel__price"
        )[0];
        if (isMonthly) {
            panelPrice.innerHTML = element.priceMonthly;
        } else {
            panelPrice.innerHTML = element.priceYearly;
        }
    });
}

window.onload = function() {
    document.getElementById("size-width").innerHTML = window.innerWidth; // TODO: Remove after testing
    const $panelList = $("#panel-list");
    const packages = this.PACKAGES.getPackages();

    packages.forEach(element => {
        const node = document.createElement("div");
        node.classList.add("pricing-panel-container");

        let classMod = "";
        let index = packages.indexOf(element);

        if (index % 2) {
            classMod = " pricing-panel--purple";
        }

        node.innerHTML = `<pricing-panel class="pricing-panel${classMod}"  
            id="panel-${index}"
            name="${element.name}" 
            price="${element.priceMonthly}" 
            storage="${element.storage}" 
            user-limit="${element.userLimit}" 
            sending-limit="${element.sendingLimit}">
            </pricing-panel>`;
        $panelList.append(node);
    });
};

// TODO: Remove after testing
window.addEventListener("resize", function() {
    document.getElementById("size-width").innerHTML = window.innerWidth;
});
