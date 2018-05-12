import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */  
      query(':enter , :leave',
       style({ position: 'fixed', width:'100%' }), { optional: true }),
                
     
     /* 2 */ group([  // block executes in parallel
      query(':enter ', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave ', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }) 
      
    
    ]),
    transition('* <=> *', [
      /* order */
      /* 1 */  
        query(':enter , :leave',
         style({ position: 'fixed', width:'100%' }), { optional: true }),
                  
       
       /* 2 */ group([  // block executes in parallel
        query(':enter ', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave ', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }) 
        
      
      ])

    ]
)])]);

@Component({
    selector: 'my-app',
    animations:[routerTransition],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta:Meta
  ) {}
  ngOnInit() {
    this.router.events.filter((event: Event) => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    })
    .filter((route) => route.outlet === 'primary')
    .mergeMap((route) => route.data)
    .subscribe((event) => {
      this.titleService.setTitle(event['title']);
      if(event['description']){
      this.meta.addTags([{
        name:'author',content:'Sean Sharma'},
        {
          name:'description',content:event['description']
        }
      
      ]);
    }
    });
  }
 getState(outlet){
     if(outlet.activatedRouteData.state=='Home'||outlet.activatedRouteData.state=='About'||outlet.activatedRouteData.state=='Contact'
        ||outlet.activatedRouteData.state=='Resume'){
         
        return outlet.activatedRouteData.state;
     }
    //return ''; 
 }
}