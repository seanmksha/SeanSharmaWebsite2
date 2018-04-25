import {Component} from "@angular/core";
@Component({
    selector:'searchengine',
    templateUrl:'SearchEngine.component.html'
})
export class SearchEngineComponent{
    header=`Web Crawler and Search Engine`;
    images=[
        `/images/polyseum/PolyseumSmall.jpg`,
        `/images/searchengine/SearchPreview.jpg`,
        `/images/searchengine/Search4.png` ,
        `/images/searchengine/Search5.png`       
    ]
paragraphs=[
    `Emaily is a web applications where users can purchase credits using Stripe to send out surveys.`,
   `paragraph2`
];
}