import { Component } from "@angular/core";
import { Paragraph } from './../../dataStructures/paragraph';
var MessageBoardComponent = /** @class */ (function () {
    function MessageBoardComponent() {
        this.mainClause = "Message Board is a message board system where user's can register and post messages. Uses MongoDB, Express, Angular, and NodeJS along with JWT Tokens. ";
        this.paragraphs = [new Paragraph("Authentication", "For authentication, users register a valid email address or username.  The system checks it agaisnt\n                  all other users in the mongoose database to make sure it is unique.  If creation of a user is successful, then the user is created; however,\n                  it is defaulted to unverified.  A token is randomly generated to a route that is e-mailed to the registering user's email address to verify their e-mail.  Once the user clicks the link\n                  the mapped token to username is marked as verified."),
            new Paragraph("Message Permissions", "Users are able to post, edit, and delete messages based on if the message belongs to their user and if they are a verified user.")
        ];
    }
    MessageBoardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'message-board',
                    templateUrl: 'MessageBoard.component.html'
                },] },
    ];
    return MessageBoardComponent;
}());
export { MessageBoardComponent };
