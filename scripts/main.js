var PACKAGES = (function () {
    var isMonthly = true;
    const packages = [
        {
            name: "Basic",
            priceMonthly: "19.99",
            priceYearly: "199.99",
            storage: "500 GB",
            userLimit: 2,
            sendingLimit: "3 GB",
        },
        {
            name: "Professional",
            priceMonthly: "24.99",
            priceYearly: "249.99",
            storage: "1 TB",
            userLimit: 5,
            sendingLimit: "10 GB",
        },
        {
            name: "Master",
            priceMonthly: "39.99",
            priceYearly: "399.99",
            storage: "2 TB",
            userLimit: 10,
            sendingLimit: "20 GB",
        },
    ];
    return {
        getPackages: function () {
            return packages;
        },
        getIsMonthly: function () {
            return isMonthly;
        },
        changeIsMonthly: function () {
            isMonthly = !isMonthly;
        },
    };
})();

function changePriceDisplay() {
    const packages = PACKAGES.getPackages();
    const $toggle = $(".custom-toggle__toggle");
    const isMonthly = !PACKAGES.getIsMonthly();

    packages.forEach((element) => {
        const index = packages.indexOf(element);
        const $panelPrice = $(".pricing-panel__price-numbers")[index];

        $panelPrice.innerHTML = isMonthly
            ? element.priceMonthly
            : element.priceYearly;
    });

    $toggle.toggleClass("custom-toggle__toggle--on");
    PACKAGES.changeIsMonthly();
}

window.onload = function () {
    const $panelList = $("#panel-list");
    const $switchSpan = $("#switch-span");
    const packages = this.PACKAGES.getPackages();

    packages.forEach((element) => {
        let index = packages.indexOf(element);

        $panelList.append(`
            <li is="pricing-panel"
                class="pricing-panel"  
                id="panel-${index}"
                data-name="${element.name}" 
                data-price="${element.priceMonthly}" 
                data-storage="${element.storage}" 
                data-user="${element.userLimit}" 
                data-sending="${element.sendingLimit}">
                </li>
        `);
    });

    $switchSpan.append(
        `<custom-toggle 
            id="monthly-pricing-toggle" 
            class="custom-toggle" 
            onclick="changePriceDisplay()">
            </custom-toggle>`
    );
};
