import { Component } from "@angular/core";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    templateUrl: 'header.component.html'
                },] },
    ];
    return HeaderComponent;
}());
export { HeaderComponent };
