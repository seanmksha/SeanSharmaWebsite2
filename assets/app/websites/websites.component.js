import { previewData } from './../dataStructures/previewData';
import { sidebarData } from './../dataStructures/sidebarData';
import { Component } from "@angular/core";
var WebsitesComponent = /** @class */ (function () {
    function WebsitesComponent() {
        this.LinkPrefix = "/Websites/";
        this.mainHeader = "Websites";
        this.mainParagraph = " These are websites built using html, css, javascript, php, Angular or WordPress using custom themes developed by Sean Sharma.\n    ";
        this.krystowersheader = "Krys Towers Web Development";
        this.krystowerstext = "Krys Towers Web Development is a company Sean Sharma created for web development freelancing jobs.";
        this.krystowersimage = "/images/krystowers/krystowers700x330.png";
        this.krystowersLink = "Krys-Towers-Web-Development";
        this.warwickheader = "850 Warwick Apartments";
        this.warwicktext = "850 Warwick Apartments is a website built for Warwick LLC to showcase their primary property to potential renters.";
        this.warwickimage = "/images/850warwick/850warwick700x330.jpg";
        this.warwickLink = "850-Warwick-Avenue-Apartments";
        this.headparsersheader = "Head Parsers Gaming";
        this.headparserstext = "Head Parsers Gaming is a website built for a small FFXIV community.";
        this.headparsersimage = "/images/headparsers/HeadParsers700x330.jpg";
        this.headparsersLink = "Head-Parsers-Gaming";
        this.thisData = [
            new previewData(0, this.krystowersheader, this.krystowerstext, this.krystowersimage, this.krystowersLink),
            new previewData(1, this.warwickheader, this.warwicktext, this.warwickimage, this.warwickLink),
            new previewData(2, this.headparsersheader, this.headparserstext, this.headparsersimage, this.headparsersLink)
        ];
        this.sideData = [
            new sidebarData("Krys Towers Web Development", "Krys-Towers-Web-Development"),
            new sidebarData("850 Warwick Apartments", "850-Warwick-Avenue-Apartments"),
            new sidebarData("Head Parsers Gaming", "Head-Parsers-Gaming")
        ];
    }
    WebsitesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-websites',
                    templateUrl: 'websites.component.html'
                },] },
    ];
    return WebsitesComponent;
}());
export { WebsitesComponent };
