import { previewData } from './../dataStructures/previewData';
import { sidebarData } from './../dataStructures/sidebarData';
import {Component} from "@angular/core";
@Component({
    selector:'app-webapplications',
    templateUrl:'webapplications.component.html'
})
export class WebApplicationsComponent{
    LinkPrefix=`/Web-Applications/`;
    mainHeader=`Web Applications`;
    mainParagraph=`Web applications using HTML, CSS, Javascript, NodeJS, Express, Angular, React-Redux, MongoDB, MySQL, and/or PHP`;

    stockMarketHeader=`Stock Market Searcher`;
    stockMarketText=`An application where the user can search for stock market information and trends.`;
    stockMarketImage=`/images/stockmarketsearcher/preview700x330.png`;
    stockMarketLink=`Stock-Market-Searcher`;

    emailyHeader=`Emaily`;
    emailyText=`An application where users can pay for credits to send out emails for surveys.`;
    emailyImage=`/images/emaily/emaily700x330.jpg`;
    emailyLink=`Emaily`;


    messageBoardHeader=`Message Board`;
    messageBoardText=`An application that allows authenticated users to post on a community message board.`;
    messageBoardImage=`/images/messageboard/MessageBoard700x330.jpg`;
    messageBoardLink=`Message-Board`;


    newsWatcherHeader=`News Watcher`;
    newsWatcherText=`An application where users can pick filters and get filtered news updates from the New York Times.`;
    newsWatcherImage=`/images/newswatcher/NewsWatcher700x440.png`;
    newsWatcherLink=`News-Watcher`;
    thisData=[
        new previewData(0,this.stockMarketHeader,this.stockMarketText,this.stockMarketImage,this.stockMarketLink)    
        ,
        new previewData(1,this.messageBoardHeader,this.messageBoardText,this.messageBoardImage,this.messageBoardLink)    
        ,
        new previewData(2,this.emailyHeader,this.emailyText,this.emailyImage,this.emailyLink)    
        ,
        
        new previewData(3,this.newsWatcherHeader,this.newsWatcherText,this.newsWatcherImage,this.newsWatcherLink)    
        
    ];
    sideData=[
        new sidebarData("Stock Market Searcher", "Stock-Market-Searcher"),
        new sidebarData("Message Board", "Message-Board"),
        new sidebarData("Emaily", "Emaily"),
        new sidebarData("News Watcher", "News Watcher")
    ];
}