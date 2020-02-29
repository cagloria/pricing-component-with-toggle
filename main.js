"use strict";

var PACKAGES = (function() {
    var isMonthly = true;
    const packages = [
        {
            name: "Basic",
            priceMonthly: "19.99",
            priceYearly: "199.99",
            storage: "500 GB",
            userLimit: 2,
            sendingLimit: "3 GB"
        },
        {
            name: "Professional",
            priceMonthly: "24.99",
            priceYearly: "249.99",
            storage: "1 TB",
            userLimit: 5,
            sendingLimit: "10 GB"
        },
        {
            name: "Master",
            priceMonthly: "39.99",
            priceYearly: "399.99",
            storage: "2 TB",
            userLimit: 10,
            sendingLimit: "20 GB"
        }
    ];
    return {
        getPackages: function() {
            return packages;
        },
        getIsMonthly: function() {
            return isMonthly;
        },
        changeIsMonthly: function() {
            isMonthly = !isMonthly;
        }
    };
})();

function changePriceDisplay() {
    const packages = PACKAGES.getPackages();
    const $toggle = $(".custom-toggle__toggle");
    let isMonthly = !PACKAGES.getIsMonthly();

    packages.forEach(element => {
        let index = packages.indexOf(element);
        let pricingPanel = document.getElementById(`panel-${index}`);
        let panelPrice = pricingPanel.getElementsByClassName(
            "pricing-panel__price-numbers"
        )[0];
        if (isMonthly) {
            panelPrice.innerHTML = element.priceMonthly;
        } else {
            panelPrice.innerHTML = element.priceYearly;
        }
    });

    $toggle.toggleClass("custom-toggle__toggle--on");
    PACKAGES.changeIsMonthly();
}

window.onload = function() {
    document.getElementById("size-width").innerHTML = window.innerWidth; // TODO: Remove after testing
    const $panelList = $("#panel-list");
    const $switchSpan = $("#switch-span");
    const packages = this.PACKAGES.getPackages();

    packages.forEach(element => {
        let classMod = "";
        let index = packages.indexOf(element);

        if (index % 2) {
            classMod = " pricing-panel--purple";
        }

        $panelList.append(
            `<pricing-panel class="pricing-panel${classMod}"  
            id="panel-${index}"
            name="${element.name}" 
            price="${element.priceMonthly}" 
            storage="${element.storage}" 
            user-limit="${element.userLimit}" 
            sending-limit="${element.sendingLimit}">
            </pricing-panel>`
        );
    });

    $switchSpan.append(
        `<custom-toggle 
            id="monthly-pricing-toggle" 
            class="custom-toggle" 
            tabindex="0"
            onclick="changePriceDisplay()">
            </custom-toggle>`
    );
};

// TODO: Remove after testing
window.addEventListener("resize", function() {
    document.getElementById("size-width").innerHTML = window.innerWidth;
});
