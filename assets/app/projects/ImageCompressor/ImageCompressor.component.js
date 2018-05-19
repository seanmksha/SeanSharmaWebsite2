import { Component } from "@angular/core";
var ImageCompressorComponent = /** @class */ (function () {
    function ImageCompressorComponent() {
        this.header = "JPEG/JPEG2000 Image Compressor";
        this.images = [
            "/images/polyseum/PolyseumSmall.jpg",
            "/images/imagecompressor/Compression.jpg"
        ];
        this.paragraphs = [];
    }
    ImageCompressorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'imagecompressor',
                    templateUrl: 'ImageCompressor.component.html'
                },] },
    ];
    return ImageCompressorComponent;
}());
export { ImageCompressorComponent };
