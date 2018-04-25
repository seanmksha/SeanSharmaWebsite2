import { previewData } from './../dataStructures/previewData';
import {Component} from "@angular/core";

@Component({
    selector:'app-projects',
    templateUrl:'projects.component.html'
})
export class ProjectsComponent{
    LinkPrefix=`/Projects/`
    mainHeader=`Projects`;
    mainParagraph=`Gaming or technical projects created by Sean Sharma or a group that Sean Sharma participated in`;

    polyseumHeader=`Polyseum`;
    polyseumText=`A multiplayer first-person shooter video game with knockback mechanics.`;
    polyseumImage=`/images/polyseum/Polyseum700x330.jpg`;
    polyseumLink=`Polyseum`;

    searchEngineHeader=`Web Crawler and Solr Search Engine`;
    searchEngineText=`A search engine using documents obtained through a java web crawler and Solr for indexing.`;
    searchEngineImage=`/images/searchengine/SearchPreview.jpg`;
    searchEngineLink=`Search-Engine`;


   imageCompressorHeader=`JPEG/JPEG2000 Image Compressor`;
   imageCompressorText=`An application that has email verification for newly registered users with authentication and acts as a simple message board`;
   imageCompressorImage=`/images/imagecompressor/Compression.jpg`;
   imageCompressorLink=`Image-Compressor`;


    stockMarketHeader=`Stock Market Searcher Android App`;
    stockMarketText=`An android application version of the stock market website`;
    stockMarketImage=`/images/stockmarketandroid/StockMarketAndroid.jpg`;
    stockMarketLink=`Stock-Market-Searcher-Android`;

    videoHighlightHeader=`Video Highlight Creator`;
    videoHighlightText=`An application that takes in video files and extracts the most action-filled scenes`;
    videoHighlightImage=`/images/videohighlight/video1.png`;
    videoHighlightLink=`Video-Highlight-Creator`;

    thisData=[
        new previewData(0,this.stockMarketHeader,this.stockMarketText,this.stockMarketImage,this.stockMarketLink)    
        ,
        new previewData(1,this.polyseumHeader,this.polyseumText,this.polyseumImage,this.polyseumLink)    
        ,
        new previewData(2,this.searchEngineHeader,this.searchEngineText,this.searchEngineImage,this.searchEngineLink)    
        ,
        new previewData(3,this.videoHighlightHeader,this.videoHighlightText,this.videoHighlightImage,this.videoHighlightLink) ,
        new previewData(4,this.imageCompressorHeader,this.imageCompressorText,this.imageCompressorImage,this.imageCompressorLink) 
        
        
    ];
}