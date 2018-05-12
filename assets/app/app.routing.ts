import { NotFoundComponent } from './NotFound/NotFound.component';
import { ResumeComponent } from './Resume/Resume.component';
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

import {ContactComponent} from './Contact/contact.component';

import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/intro.component';
import {Routes,RouterModule} from "@angular/router"
import {WebsitesComponent} from './websites/websites.component';
 const APP_ROUTES: Routes = [
    {path:'test', redirectTo:'/messages', pathMatch:'full'},
    {
        path:'',
        component:IntroComponent, 
        data:{
            state:'Home', 
            title:'Web Developer | Sean Sharma',
            description:"Web Developer Sean Sharma's personal website showcasing work history, websites, web applications, and projects he's done in the past."
        }},
    {
        path:'About',
        component:AboutComponent, 
        data:{
            state:'About',
            title:'About Sean Sharma'
        }
    },
    {path:'Websites',component:WebsitesComponent, data:{state:'Websites',title:'Websites Developed By Sean Sharma'}},
    {path:'Websites/Krys-Towers-Web-Development',component:KrysTowersComponent, data:{state:'KrysTowers', title:'Krys Towers Web Development | Sean Sharma'}},
    {path:'Websites/850-Warwick-Avenue-Apartments',component:WarwickApartmentsComponent, data:{state:'WarwickApartments', title:'850 Warwick Avenue Apartments | Sean Sharma'}},
    {path:'Websites/Head-Parsers-Gaming',component:HeadParsersComponent, data:{state:'HeadParsers', title:'The Head Parsers | Sean Sharma'}},
    {path:'Web-Applications',component:WebApplicationsComponent, data:{state:'WebApplications', title:'Web Applications Developed By Sean Sharma'}},
    {path:'Web-Applications/Emaily',component:EmailyComponent, data:{state:'Emaily', title:'Emaily | Sean Sharma'}},
    {path:'Web-Applications/Stock-Market-Searcher',component:StockMarketSearcherComponent, data:{state:'StockMarketSearcher', title:'Stock Market Searcher | Sean Sharma'}},
    {path:'Web-Applications/Message-Board',component:MessageBoardComponent, data:{state:'MessageBoard', title:'Message Board | Sean Sharma'}},
    {path:'Web-Applications/News-Watcher',component:NewsWatcherComponent, data:{state:'NewsWatcher', title:'News Watcher | Sean Sharma'}},
    {path:'Projects',component:ProjectsComponent, data:{state:'Projects', title:'Projects Developed By Sean Sharma'}},
    {path:'Projects/Polyseum',component:PolyseumComponent, data:{state:'Polyseum', title:'Polyseum | Sean Sharma'}},
    {path:'Projects/Search-Engine',component:SearchEngineComponent, data:{state:'SearchEngine', title:'Search Engine | Sean Sharma'}},
    {path:'Projects/Image-Compressor',component:ImageCompressorComponent, data:{state:'ImageCompressor', title:'Image Compressor | Sean Sharma'}},
    {path:'Projects/Stock-Market-Searcher-Android',component:StockMarketSearcherAndroidComponent, data:{state:'StockMarketSearcherAndroid', title:'Stock Market Searcher Android App | Sean Sharma'}},
    {path:'Projects/Video-Highlight-Creator',component:VideoHighlightComponent, data:{state:'VideoHighlight', title:'Video Highlight Creator | Sean Sharma'}},
    {path:'SandBox',component:SandBoxComponent, data:{state:'SandBox'}},
    {path:'Resume',component:ResumeComponent, data:{state:'Resume', title:'Sean Sharma | Resume'}},
    {path:'Contact',component:ContactComponent, data:{state:'Contact', title:'Sean Sharma | Contact'}}
    ,{ path: '**', component: NotFoundComponent, data:{state:'PageNotFound',title:'Page Not Found' }}

    
    
];

export const routing=RouterModule.forRoot(APP_ROUTES);//,{useHash:true}