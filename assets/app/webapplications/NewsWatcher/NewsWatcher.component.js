import { Component } from "@angular/core";
import { Paragraph } from './../../dataStructures/paragraph';
var NewsWatcherComponent = /** @class */ (function () {
    function NewsWatcherComponent() {
        this.mainClause = " Newswatcher is an app where users can register and login to specify settings to get news articles from the New York times based on their selection.\n           It uses MongoDB, Express, Angular, and NodeJS. ";
        this.paragraphs = [
            new Paragraph("Authentication", "For authentication, I use the passport middleware to verify that a user is logged in as well as save data to the mongoDB."),
            new Paragraph("User Preferences", "Users are able to save tags or keywords for the news articles that they want, or keywords that they don't want appearing in their newsfeed."),
            new Paragraph("Newsfeed", "I use the New York Times' API to retrieve and filter out news.  Instead of having it make an ajax command every time the user visits the page, the application just retrieves the information every 5 minutes in case there are a lot of users\n     asking for the newsfeed.")
        ];
    }
    NewsWatcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'news-watcher',
                    templateUrl: 'NewsWatcher.component.html'
                },] },
    ];
    return NewsWatcherComponent;
}());
export { NewsWatcherComponent };
