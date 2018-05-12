import { Component } from "@angular/core";
var PolyseumComponent = /** @class */ (function () {
    function PolyseumComponent() {
        this.header = "Polyseum";
        this.images = [
            "/images/polyseum/PolyseumSmall.jpg",
            "/images/polyseum/Polyseum700x330.jpg"
        ];
        this.paragraphs = [
            "Emaily is a web applications where users can purchase credits using Stripe to send out surveys.",
            "paragraph2"
        ];
    }
    PolyseumComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polyseum',
                    templateUrl: 'Polyseum.component.html'
                },] },
    ];
    return PolyseumComponent;
}());
export { PolyseumComponent };
