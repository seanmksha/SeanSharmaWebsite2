import { previewData } from './../dataStructures/previewData';
import { sidebarData } from './../dataStructures/sidebarData';
import { Component } from "@angular/core";
var WebApplicationsComponent = /** @class */ (function () {
    function WebApplicationsComponent() {
        this.LinkPrefix = "/Web-Applications/";
        this.mainHeader = "Web Applications";
        this.mainParagraph = "Web applications using HTML, CSS, Javascript, NodeJS, Express, Angular, React-Redux, MongoDB, MySQL, and/or PHP";
        this.stockMarketHeader = "Stock Market Searcher";
        this.stockMarketText = "An application where the user can search for stock market information and trends.";
        this.stockMarketImage = "/images/stockmarketsearcher/preview700x330.png";
        this.stockMarketLink = "Stock-Market-Searcher";
        this.emailyHeader = "Emaily";
        this.emailyText = "An application where users can pay for credits to send out emails for surveys.";
        this.emailyImage = "/images/emaily/emaily700x330.jpg";
        this.emailyLink = "Emaily";
        this.messageBoardHeader = "Message Board";
        this.messageBoardText = "An application that has email verification for newly registered users with authentication and acts as a simple message board";
        this.messageBoardImage = "/images/messageboard/MessageBoard700x330.jpg";
        this.messageBoardLink = "Message-Board";
        this.newsWatcherHeader = "News Watcher";
        this.newsWatcherText = "An application where users can pick categories and get news updates from the New York Times";
        this.newsWatcherImage = "/images/newswatcher/NewsWatcher700x440.png";
        this.newsWatcherLink = "News-Watcher";
        this.thisData = [
            new previewData(0, this.stockMarketHeader, this.stockMarketText, this.stockMarketImage, this.stockMarketLink),
            new previewData(1, this.messageBoardHeader, this.messageBoardText, this.messageBoardImage, this.messageBoardLink),
            new previewData(2, this.emailyHeader, this.emailyText, this.emailyImage, this.emailyLink),
            new previewData(3, this.newsWatcherHeader, this.newsWatcherText, this.newsWatcherImage, this.newsWatcherLink)
        ];
        this.sideData = [
            new sidebarData("Stock Market Searcher", "Stock-Market-Searcher"),
            new sidebarData("Message Board", "Message-Board"),
            new sidebarData("Emaily", "Emaily"),
            new sidebarData("News Watcher", "News Watcher")
        ];
    }
    WebApplicationsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-webapplications',
                    templateUrl: 'webapplications.component.html'
                },] },
    ];
    return WebApplicationsComponent;
}());
export { WebApplicationsComponent };
