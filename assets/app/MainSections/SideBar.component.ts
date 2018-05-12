import { sidebarData } from './../dataStructures/sidebarData';
import {Component,Input} from "@angular/core";

@Component({
    selector:'Sidebar',
    templateUrl:'SideBar.component.html'
})
export class SidebarComponent{
    @Input() Data:sidebarData[];
    @Input() title:string;
    @Input() linkPrefix:string;
    @Input() show:boolean;
}