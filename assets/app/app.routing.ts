import { AboutComponent } from './about/about.component';
import { IntroComponent } from './home/intro.component';
import {Routes,RouterModule} from "@angular/router"
import {WebsitesComponent} from './websites/websites.component';
 const APP_ROUTES: Routes = [
    {path:'test', redirectTo:'/messages', pathMatch:'full'},
    {path:'',component:IntroComponent},
    {path:'about',component:AboutComponent},
    {path:'websites',component:WebsitesComponent}
];

export const routing=RouterModule.forRoot(APP_ROUTES);