import {Component} from "@angular/core";
import { Paragraph } from './../../dataStructures/paragraph';
@Component({
    selector:'emaily',
    templateUrl:'Emaily.component.html'
})
export class EmailyComponent{
    mainClause=`Emaily is a web applications where users can purchase credits using Stripe to send out surveys. It uses MongoDB,
    Express,React-Redux, and NodeJS along with Stripe for payments.`;
paragraphs=[
   new Paragraph(`Authentication`,
   `Users login with either google or create an account that is encrypted and stored in mongoDB. Authentication uses Passport as a middleware.`
   
   ),
   new Paragraph(`Credits`,`Once Stripe's callback for verifying a payment is triggered, credits are added to the logged in user's account.
   The user can send out surveys, and credits will be subtracted from the account based on fees.`)];

}