import { NotFoundComponent } from './NotFound/NotFound.component';
import { SidebarComponent } from './MainSections/SideBar.component';
import { ResumeComponent } from './Resume/Resume.component';
import { FooterComponent } from './MainSections/Footer.component';
import { PreviewMainComponent } from './MainSections/PreviewMain.component';
import { SandBoxComponent } from './about/sandbox.component';
import { VideoHighlightComponent } from './projects/VideoHighlights/VideoHighlights.component';
import { StockMarketSearcherAndroidComponent } from './projects/StockMarketSearcherAndroid/StockMarketSearcherAndroid.component';
import { ImageCompressorComponent } from './projects/ImageCompressor/ImageCompressor.component';
import { SearchEngineComponent } from './projects/SearchEngine/SearchEngine.component';
import { PolyseumComponent } from './projects/Polyseum/Polyseum.component';
import { MessageBoardComponent } from './webapplications/MessageBoard/MessageBoard.component';
import { StockMarketSearcherComponent } from './webapplications/StockMarketSearcher/StockMarketSearcher.component';
import { EmailyComponent } from './webapplications/Emaily/Emaily.component';
import { HeadParsersComponent } from './websites/HeadParsersGaming/Head-Parsers-Gaming.component';
import { WarwickApartmentsComponent } from './websites/850WarwickApartments/850-Warwick-Apartments.component';
import { KrysTowersComponent } from './websites/KrysTowers/Krys-Towers.component';
import { ProjectsSidebarComponent } from './projects/projects-sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebApplicationsComponent } from './webapplications/webapplications.component';
import { WebApplicationsSidebarComponent } from './webapplications/webapplications-sidebar.component';
import { WebsitesSidebarComponent } from './websites/websites-sidebar.component';
import { IntroPreviewComponent } from './home/intro-preview.component';
import { NewsWatcherComponent } from './webapplications/NewsWatcher/NewsWatcher.component';
import { IntroComponent } from './home/intro.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {WebsitesComponent} from "./websites/websites.component"
import {AboutComponent} from "./about/about.component"
import {ContactComponent} from "./Contact/contact.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        WebsitesComponent,
        IntroComponent
        ,IntroPreviewComponent,
        AboutComponent,
        WebsitesSidebarComponent,
        WebApplicationsSidebarComponent,
        WebApplicationsComponent,
        ProjectsComponent,
        ProjectsSidebarComponent,
        KrysTowersComponent,
        WarwickApartmentsComponent,
        HeadParsersComponent,
        EmailyComponent,
        StockMarketSearcherComponent,
        MessageBoardComponent,
        NewsWatcherComponent,
        PolyseumComponent,
        SearchEngineComponent,
        ImageCompressorComponent,
        StockMarketSearcherAndroidComponent,
        VideoHighlightComponent,
        SandBoxComponent,
        PreviewMainComponent,
        SidebarComponent,
        FooterComponent,
        ResumeComponent,
        ContactComponent,
        NotFoundComponent
         ],
    imports: [BrowserModule,BrowserAnimationsModule,
    routing,
    HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}