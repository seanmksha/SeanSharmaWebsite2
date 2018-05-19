import { Component } from '@angular/core';
import { trigger, animate, style, group, query, transition } from '@angular/animations';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
export var routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */
        query(':enter , :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ group([
            // block executes in parallel
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
            query(':enter , :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            /* 2 */ group([
                // block executes in parallel
                query(':enter ', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave ', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true })
            ])
        ])
    ])
]);
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, meta) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.meta = meta;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof NavigationEnd; }).pipe(map(function () { return _this.activatedRoute; })).pipe(map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }))
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            if (event['description']) {
                _this.meta.addTags([{
                        name: 'author', content: 'Sean Sharma'
                    },
                    {
                        name: 'description', content: event['description']
                    }
                ]);
            }
        });
    };
    AppComponent.prototype.getState = function (outlet) {
        if (outlet.activatedRouteData.state == 'Home' || outlet.activatedRouteData.state == 'About' || outlet.activatedRouteData.state == 'Contact'
            || outlet.activatedRouteData.state == 'Resume') {
            return outlet.activatedRouteData.state;
        }
        //return '';
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    animations: [routerTransition],
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: ActivatedRoute, },
        { type: Title, },
        { type: Meta, },
    ]; };
    return AppComponent;
}());
export { AppComponent };
