import { previewData } from './../dataStructures/previewData';
import { Component, Input } from "@angular/core";
var PreviewMainComponent = /** @class */ (function () {
    function PreviewMainComponent() {
    }
    PreviewMainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'PreviewMain',
                    templateUrl: 'PreviewMain.component.html'
                },] },
    ];
    /** @nocollapse */
    PreviewMainComponent.propDecorators = {
        "Data": [{ type: Input },],
        "LinkPrefix": [{ type: Input },],
    };
    return PreviewMainComponent;
}());
export { PreviewMainComponent };
