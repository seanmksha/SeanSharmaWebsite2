import { previewData } from './../dataStructures/previewData';
import {sidebarData} from './../dataStructures/sidebarData';
import {Component} from "@angular/core";
import { CommonModule } from "@angular/common";




@Component({
    selector:'app-websites',
    templateUrl:'websites.component.html'
})

export class WebsitesComponent{
    LinkPrefix=`/Websites/`;
    mainHeader=`Websites`;
    mainParagraph=` These are websites built using html, css, javascript, php, Angular or WordPress using custom themes developed by Sean Sharma.
    `;
    krystowersheader=`Krys Towers Web Development`;
    krystowerstext=`Krys Towers Web Development is a company Sean Sharma created for web development freelancing jobs.`;
    krystowersimage=`/images/krystowers/krystowers700x330.png`;
    krystowersLink=`Krys-Towers-Web-Development`;
    warwickheader=`850 Warwick Apartments`;
    warwicktext=`850 Warwick Apartments is a website built for Warwick LLC to showcase their primary property to potential renters.`;
    warwickimage=`/images/850warwick/850warwick700x330.jpg`;
    warwickLink=`850-Warwick-Avenue-Apartments`

    headparsersheader=`Head Parsers Gaming`;
    headparserstext=`Head Parsers Gaming is a website built for a small FFXIV community.`;
    headparsersimage=`/images/headparsers/HeadParsers700x330.jpg`;
    
    headparsersLink=`Head-Parsers-Gaming`;

    thisData=[
        new previewData(0,this.krystowersheader,this.krystowerstext,this.krystowersimage,this.krystowersLink)    
        ,
        new previewData(1,this.warwickheader,this.warwicktext,this.warwickimage,this.warwickLink)
        ,
        new previewData(2,this.headparsersheader,this.headparserstext,this.headparsersimage,this.headparsersLink)
        
    ];
    sideData=[
        new sidebarData("Krys Towers Web Development", "Krys-Towers-Web-Development"),
        new sidebarData("850 Warwick Apartments", "850-Warwick-Avenue-Apartments"),
        new sidebarData("Head Parsers Gaming", "Head-Parsers-Gaming")
    ];
   
}
