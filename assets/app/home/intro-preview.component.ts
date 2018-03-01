import * as $ from 'jquery';
import {Component} from "@angular/core";
import { AfterViewInit } from '@angular/core';

@Component({
    selector:'intro-preview',
    templateUrl:'intro-preview.component.html'
})
export class IntroPreviewComponent implements AfterViewInit{
    ngAfterViewInit() {
        $(".intro-item img").hover(
            function(){
                $(this).filter(':not(:animated)').animate({
                   top:'-40px'
                },'normal');
              // This only fires if the row is not undergoing an animation when you mouseover it
              },
              function() {
                $(this).animate({
                  top:'0px'
                },'normal');
              });
           
      //  $.getScript('assets/app/home/intro.js');
      }
}