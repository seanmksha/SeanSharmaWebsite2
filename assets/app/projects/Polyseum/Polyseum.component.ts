import {Component} from "@angular/core";
@Component({
    selector:'polyseum',
    templateUrl:'Polyseum.component.html'
})
export class PolyseumComponent{
    header=`Polyseum`;
    images=[
        `/images/polyseum/PolyseumSmall.jpg`,
        `/images/polyseum/Polyseum700x330.jpg`        
    ]
paragraphs=[
    `Emaily is a web applications where users can purchase credits using Stripe to send out surveys.`,
   `paragraph2`
];
}