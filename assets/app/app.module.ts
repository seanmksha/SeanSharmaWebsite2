import { IntroPreviewComponent } from './home/intro-preview.component';

import { IntroComponent } from './home/intro.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {WebsitesComponent} from "./websites/websites.component"
import {AboutComponent} from "./about/about.component"

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        WebsitesComponent,
        IntroComponent
        ,IntroPreviewComponent,
        AboutComponent
         ],
    imports: [BrowserModule,
    routing,
    HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}