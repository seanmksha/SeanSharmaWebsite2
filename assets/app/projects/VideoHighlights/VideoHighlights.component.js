import { Component } from "@angular/core";
var VideoHighlightComponent = /** @class */ (function () {
    function VideoHighlightComponent() {
        this.header = "Video Highlight Creator";
        this.images = [
            "/images/polyseum/PolyseumSmall.jpg",
            "/images/videohighlight/video1.png"
        ];
        this.paragraphs = [
            "Emaily is a web applications where users can purchase credits using Stripe to send out surveys.",
            "paragraph2"
        ];
    }
    VideoHighlightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'videohighlights',
                    templateUrl: 'VideoHighlights.component.html'
                },] },
    ];
    return VideoHighlightComponent;
}());
export { VideoHighlightComponent };
