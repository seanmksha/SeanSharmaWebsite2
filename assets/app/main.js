import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app.module";
import './scss/style.scss';
platformBrowserDynamic().bootstrapModule(AppModule);
