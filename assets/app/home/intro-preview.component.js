import * as $ from 'jquery';
import { Component } from "@angular/core";
var IntroPreviewComponent = /** @class */ (function () {
    function IntroPreviewComponent() {
        this.images = [
            {
                "title": "Websites",
                "linkPrefix": "/Websites/",
                "link": "",
                "image": "/images/krystowers/krystowers700x330.png"
            },
            {
                "title": "Web Applications",
                "linkPrefix": "/Web-Applications/",
                "link": "",
                "image": "/images/stockmarketsearcher/preview700x330.png"
            },
            {
                "title": "Web Applications",
                "linkPrefix": "/Web-Applications/",
                "link": "",
                "image": "/images/emaily/emaily700x330.jpg"
            },
            {
                "title": "Projects",
                "linkPrefix": "/Projects/",
                "link": "",
                "image": "/images/polyseum/Polyseum700x330.jpg"
            },
        ];
    }
    IntroPreviewComponent.prototype.ngAfterViewInit = function () {
        $(".intro-item").hover(function () {
            $(this).filter(':not(:animated)').animate({
                top: '-40px'
            }, 'normal');
            // This only fires if the row is not undergoing an animation when you mouseover it
        }, function () {
            $(this).animate({
                top: '0px'
            }, 'normal');
        });
        //  $.getScript('assets/app/home/intro.js');
    };
    IntroPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'intro-preview',
                    templateUrl: 'intro-preview.component.html'
                },] },
    ];
    return IntroPreviewComponent;
}());
export { IntroPreviewComponent };
