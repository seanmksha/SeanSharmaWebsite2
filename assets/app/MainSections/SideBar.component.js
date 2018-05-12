import { Component, Input } from "@angular/core";
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'Sidebar',
                    templateUrl: 'SideBar.component.html'
                },] },
    ];
    /** @nocollapse */
    SidebarComponent.propDecorators = {
        "Data": [{ type: Input },],
        "title": [{ type: Input },],
        "linkPrefix": [{ type: Input },],
        "show": [{ type: Input },],
    };
    return SidebarComponent;
}());
export { SidebarComponent };
