import { Component } from "@angular/core";
var SearchEngineComponent = /** @class */ (function () {
    function SearchEngineComponent() {
        this.header = "Web Crawler and Search Engine";
        this.images = [
            "/images/polyseum/PolyseumSmall.jpg",
            "/images/searchengine/SearchPreview.jpg",
            "/images/searchengine/Search4.png",
            "/images/searchengine/Search5.png"
        ];
        this.paragraphs = [
            "Emaily is a web applications where users can purchase credits using Stripe to send out surveys.",
            "paragraph2"
        ];
    }
    SearchEngineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'searchengine',
                    templateUrl: 'SearchEngine.component.html'
                },] },
    ];
    return SearchEngineComponent;
}());
export { SearchEngineComponent };
