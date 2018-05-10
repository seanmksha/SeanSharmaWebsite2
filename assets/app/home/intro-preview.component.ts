import * as $ from 'jquery';
import {Component} from "@angular/core";
import { AfterViewInit } from '@angular/core';

@Component({
    selector:'intro-preview',
    templateUrl:'intro-preview.component.html'
})
export class IntroPreviewComponent implements AfterViewInit{
    images=[
       {
           "title":`Websites`,
       "linkPrefix":`/Websites/`,
       "link":``,
       "image": `/images/krystowers/krystowers700x330.png`},
       {
           "title":`Web Applications`,
           "linkPrefix":`/Web-Applications/`,
           "link":``,
           "image": `/images/stockmarketsearcher/preview700x330.png`},
       {
           "title":`Web Applications`,
           "linkPrefix":`/Web-Applications/`,
           "link":``,
           "image": `/images/emaily/emaily700x330.jpg`},
       {
           "title":`Projects`,
           "linkPrefix":`/Projects/`,
           "link":``,
           "image": `/images/Polyseum/Polyseum700x330.jpg`},

    ];
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