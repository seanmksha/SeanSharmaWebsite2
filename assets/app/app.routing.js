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
import { ContactComponent } from './Contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/intro.component';
import { RouterModule } from "@angular/router";
import { WebsitesComponent } from './websites/websites.component';
var ɵ0 = {
    state: 'Home',
    title: 'Sean Sharma | Software Engineer | Full-Stack Web Developer',
    description: "Web Developer Sean Sharma's personal website showcasing work history, websites, web applications, and projects he's done in the past."
}, ɵ1 = {
    state: 'About',
    title: 'About Sean Sharma'
}, ɵ2 = { state: 'Websites', title: 'Websites Developed By Sean Sharma' }, ɵ3 = { state: 'KrysTowers', title: 'Krys Towers Web Development | Sean Sharma' }, ɵ4 = { state: 'WarwickApartments', title: '850 Warwick Avenue Apartments | Sean Sharma' }, ɵ5 = { state: 'HeadParsers', title: 'The Head Parsers | Sean Sharma' }, ɵ6 = { state: 'WebApplications', title: 'Web Applications Developed By Sean Sharma' }, ɵ7 = { state: 'Emaily', title: 'Emaily | Sean Sharma' }, ɵ8 = { state: 'StockMarketSearcher', title: 'Stock Market Searcher | Sean Sharma' }, ɵ9 = { state: 'MessageBoard', title: 'Message Board | Sean Sharma' }, ɵ10 = { state: 'NewsWatcher', title: 'News Watcher | Sean Sharma' }, ɵ11 = { state: 'Projects', title: 'Projects Developed By Sean Sharma' }, ɵ12 = { state: 'Polyseum', title: 'Polyseum | Sean Sharma' }, ɵ13 = { state: 'SearchEngine', title: 'Search Engine | Sean Sharma' }, ɵ14 = { state: 'ImageCompressor', title: 'Image Compressor | Sean Sharma' }, ɵ15 = { state: 'StockMarketSearcherAndroid', title: 'Stock Market Searcher Android App | Sean Sharma' }, ɵ16 = { state: 'VideoHighlight', title: 'Video Highlight Creator | Sean Sharma' }, ɵ17 = { state: 'SandBox' }, ɵ18 = { state: 'Resume', title: 'Sean Sharma | Resume' }, ɵ19 = { state: 'Contact', title: 'Sean Sharma | Contact' }, ɵ20 = { state: 'PageNotFound', title: 'Page Not Found' };
var APP_ROUTES = [
    { path: 'test', redirectTo: '/messages', pathMatch: 'full' },
    {
        path: '',
        component: IntroComponent,
        data: ɵ0
    },
    {
        path: 'About',
        component: AboutComponent,
        data: ɵ1
    },
    { path: 'Websites', component: WebsitesComponent, data: ɵ2 },
    { path: 'Websites/Krys-Towers-Web-Development', component: KrysTowersComponent, data: ɵ3 },
    { path: 'Websites/850-Warwick-Avenue-Apartments', component: WarwickApartmentsComponent, data: ɵ4 },
    { path: 'Websites/Head-Parsers-Gaming', component: HeadParsersComponent, data: ɵ5 },
    { path: 'Web-Applications', component: WebApplicationsComponent, data: ɵ6 },
    { path: 'Web-Applications/Emaily', component: EmailyComponent, data: ɵ7 },
    { path: 'Web-Applications/Stock-Market-Searcher', component: StockMarketSearcherComponent, data: ɵ8 },
    { path: 'Web-Applications/Message-Board', component: MessageBoardComponent, data: ɵ9 },
    { path: 'Web-Applications/News-Watcher', component: NewsWatcherComponent, data: ɵ10 },
    { path: 'Projects', component: ProjectsComponent, data: ɵ11 },
    { path: 'Projects/Polyseum', component: PolyseumComponent, data: ɵ12 },
    { path: 'Projects/Search-Engine', component: SearchEngineComponent, data: ɵ13 },
    { path: 'Projects/Image-Compressor', component: ImageCompressorComponent, data: ɵ14 },
    { path: 'Projects/Stock-Market-Searcher-Android', component: StockMarketSearcherAndroidComponent, data: ɵ15 },
    { path: 'Projects/Video-Highlight-Creator', component: VideoHighlightComponent, data: ɵ16 },
    { path: 'SandBox', component: SandBoxComponent, data: ɵ17 },
    { path: 'Resume', component: ResumeComponent, data: ɵ18 },
    { path: 'Contact', component: ContactComponent, data: ɵ19 },
    { path: '**', component: NotFoundComponent, data: ɵ20 }
];
export var routing = RouterModule.forRoot(APP_ROUTES); //,{useHash:true}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20 };
