import { previewData } from './../dataStructures/previewData';
import { Component } from "@angular/core";
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.LinkPrefix = "/Projects/";
        this.mainHeader = "Projects";
        this.mainParagraph = "Gaming or technical projects made with Java, C++, Javascript, and/or PHP";
        this.polyseumHeader = "Polyseum";
        this.polyseumText = "A multiplayer first-person shooter video game with knockback mechanics.";
        this.polyseumImage = "/images/polyseum/Polyseum700x330.jpg";
        this.polyseumLink = "Polyseum";
        this.searchEngineHeader = "Web Crawler and Solr Search Engine";
        this.searchEngineText = "A search engine using documents obtained through a Java web crawler and Solr for indexing.";
        this.searchEngineImage = "/images/searchengine/SearchPreview.jpg";
        this.searchEngineLink = "Search-Engine";
        this.imageCompressorHeader = "JPEG/JPEG2000 Image Compressor";
        this.imageCompressorText = "A program that uses the same algorithms used by JPEG and JPEG2000 to compress images given a quality %.";
        this.imageCompressorImage = "/images/imagecompressor/Compression.jpg";
        this.imageCompressorLink = "Image-Compressor";
        this.stockMarketHeader = "Stock Market Searcher Android App";
        this.stockMarketText = "An android application version of the stock market searcher web application.";
        this.stockMarketImage = "/images/stockmarketandroid/StockMarketAndroid.jpg";
        this.stockMarketLink = "Stock-Market-Searcher-Android";
        this.videoHighlightHeader = "Video Highlight Creator";
        this.videoHighlightText = "An application that takes in video files and extracts the most action-filled scenes.";
        this.videoHighlightImage = "/images/videohighlight/video1.png";
        this.videoHighlightLink = "Video-Highlight-Creator";
        this.thisData = [
            new previewData(0, this.stockMarketHeader, this.stockMarketText, this.stockMarketImage, this.stockMarketLink),
            new previewData(1, this.polyseumHeader, this.polyseumText, this.polyseumImage, this.polyseumLink),
            new previewData(2, this.searchEngineHeader, this.searchEngineText, this.searchEngineImage, this.searchEngineLink),
            new previewData(3, this.videoHighlightHeader, this.videoHighlightText, this.videoHighlightImage, this.videoHighlightLink),
            new previewData(4, this.imageCompressorHeader, this.imageCompressorText, this.imageCompressorImage, this.imageCompressorLink)
        ];
    }
    ProjectsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-projects',
                    templateUrl: 'projects.component.html'
                },] },
    ];
    return ProjectsComponent;
}());
export { ProjectsComponent };
