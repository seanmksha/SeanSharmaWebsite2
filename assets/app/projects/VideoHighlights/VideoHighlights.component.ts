import {Component} from "@angular/core";
@Component({
    selector:'videohighlights',
    templateUrl:'VideoHighlights.component.html'
})
export class VideoHighlightComponent{
    header=`Video Highlight Creator`;
    images=[
        `/images/polyseum/PolyseumSmall.jpg`,
        `/images/videohighlight/video1.png`        
    ]
paragraphs=[
    `Emaily is a web applications where users can purchase credits using Stripe to send out surveys.`,
   `paragraph2`
];
}