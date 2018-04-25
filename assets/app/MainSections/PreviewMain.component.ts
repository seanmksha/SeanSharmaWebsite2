import { previewData } from './../dataStructures/previewData';
import {Component,Input} from "@angular/core";

@Component({
    selector:'PreviewMain',
    templateUrl:'PreviewMain.component.html'
})
export class PreviewMainComponent{
    @Input() Data:previewData;
    @Input() LinkPrefix:string;
}