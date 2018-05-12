import { Component } from "@angular/core";
var StockMarketSearcherAndroidComponent = /** @class */ (function () {
    function StockMarketSearcherAndroidComponent() {
        this.header = "Stock Market Searcher (Android Application)";
        this.images = [
            "/images/polyseum/PolyseumSmall.jpg",
            "/images/stockmarketandroid/StockMarketAndroid.jpg",
            "/images/stockmarketandroid/markit4.png"
        ];
        this.paragraphs = [
            "Emaily is a web applications where users can purchase credits using Stripe to send out surveys.",
            "paragraph2"
        ];
    }
    StockMarketSearcherAndroidComponent.decorators = [
        { type: Component, args: [{
                    selector: 'stockmarketandroid',
                    templateUrl: 'StockMarketSearcherAndroid.component.html'
                },] },
    ];
    return StockMarketSearcherAndroidComponent;
}());
export { StockMarketSearcherAndroidComponent };
