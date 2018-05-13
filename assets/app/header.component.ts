//import * as $ from 'jquery';
declare let $: any;
import {Component} from "@angular/core";
import { AfterViewInit } from '@angular/core';
@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent implements AfterViewInit{
    ngAfterViewInit() {
    $('.navbar-nav>li>a').on('click', function(){
        (<any> $('.navbar-collapse')).collapse('hide');
    });
    
    }
}