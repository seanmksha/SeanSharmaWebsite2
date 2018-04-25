import { SandBoxComponent } from './about/sandbox.component';
import { VideoHighlightComponent } from './projects/VideoHighlights/VideoHighlights.component';
import { StockMarketSearcherAndroidComponent } from './projects/StockMarketSearcherAndroid/StockMarketSearcherAndroid.component';
import { ImageCompressorComponent } from './projects/ImageCompressor/ImageCompressor.component';
import { SearchEngineComponent } from './projects/SearchEngine/SearchEngine.component';

import { PolyseumComponent } from './projects/Polyseum/Polyseum.component';
import { NewsWatcherComponent } from './webapplications/NewsWatcher/NewsWatcher.component';
import { MessageBoardComponent } from './webapplications/MessageBoard/MessageBoard.component';
import { StockMarketSearcherComponent } from './webapplications/StockMarketSearcher/StockMarketSearcher.component';
import { EmailyComponent } from './webapplications/Emaily/Emaily.component';

import { HeadParsersComponent } from './websites/HeadParsersGaming/Head-Parsers-Gaming.component';
import { WarwickApartmentsComponent } from './websites/850WarwickApartments/850-Warwick-Apartments.component';
import { KrysTowersComponent } from './websites/KrysTowers/Krys-Towers.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebApplicationsComponent } from './webapplications/webapplications.component';



import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/intro.component';
import {Routes,RouterModule} from "@angular/router"
import {WebsitesComponent} from './websites/websites.component';
 const APP_ROUTES: Routes = [
    {path:'test', redirectTo:'/messages', pathMatch:'full'},
    {path:'',component:IntroComponent},
    {path:'About',component:AboutComponent},
    {path:'Websites',component:WebsitesComponent},
    {path:'Websites/Krys-Towers-Web-Development',component:KrysTowersComponent},
    {path:'Websites/850-Warwick-Avenue-Apartments',component:WarwickApartmentsComponent},
    {path:'Websites/Head-Parsers-Gaming',component:HeadParsersComponent},
    {path:'Web-Applications',component:WebApplicationsComponent},
    {path:'Web-Applications/Emaily',component:EmailyComponent},
    {path:'Web-Applications/Stock-Market-Searcher',component:StockMarketSearcherComponent},
    {path:'Web-Applications/Message-Board',component:MessageBoardComponent},
    {path:'Web-Applications/News-Watcher',component:NewsWatcherComponent},
    {path:'Projects',component:ProjectsComponent},
    {path:'Projects/Polyseum',component:PolyseumComponent},
    {path:'Projects/Search-Engine',component:SearchEngineComponent},
    {path:'Projects/Image-Compressor',component:ImageCompressorComponent},
    {path:'Projects/Stock-Market-Searcher-Android',component:StockMarketSearcherAndroidComponent},
    {path:'Projects/Video-Highlight-Creator',component:VideoHighlightComponent},
    {path:'SandBox',component:SandBoxComponent}
    
    
];

export const routing=RouterModule.forRoot(APP_ROUTES);