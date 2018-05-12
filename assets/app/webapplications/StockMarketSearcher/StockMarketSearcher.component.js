import { Component } from "@angular/core";
import { Paragraph } from './../../dataStructures/paragraph';
var StockMarketSearcherComponent = /** @class */ (function () {
    function StockMarketSearcherComponent() {
        this.mainClause = "The stock market searcher uses a REST API to fetch data on stock market prices. \n It includes auto-complete for stock symbols, and charts about the stock history. Made using javascript ajax calls paired with\n PHP.";
        this.paragraphs = [new Paragraph("Autocomplete", "Every time a user inputs part of a symbol an ajax call to the back-end retrieves a list of symbols that begin with the typed in string.\n "),
            new Paragraph("User Preferences", "Users are able to save their favorite stock symbol which in turn gets saved to their local storage. Favorite stock information is shown in the front, and\n     gets refreshed via ajax calls behind the scenes every few minutes."),
            new Paragraph("History Chart", "Makes an ajax call asking for the stock history. Uses the HighStocks API,and inputs the back-end JSON data, shows the stock history of the currently selected stock.")
        ];
    }
    StockMarketSearcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'stock-market-searcher',
                    templateUrl: 'StockMarketSearcher.component.html'
                },] },
    ];
    return StockMarketSearcherComponent;
}());
export { StockMarketSearcherComponent };
