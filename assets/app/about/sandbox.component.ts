import {Component} from "@angular/core";
@Component({
    selector:'app-sandbox',
    templateUrl:'sandbox.component.html'
})
export class SandBoxComponent{
   
      getMaxStack= function()
      {
          class MaxStack{
            maxWithCount=class{
                value:number;
                count:number;
                constructor(value,count){
                    this.value=value;
                    this.count=count;
                }
                
            };
              stack:number[];
              maxStack:any[];
              
            constructor(){
                this.stack=[];
                this.maxStack=[];
                
            }
         
            isEmpty(){
                if(this.stack.length==0)return true;
                else{
                    return false;
                }
            }
            max(){
                return this.maxStack[this.maxStack.length-1].value;
            }
            pop(){
                if(this.stack.length>0){
                    var number=this.stack.pop();
                    var peek = this.maxStack[this.maxStack.length-1];
                    if(peek.count>1){
                        this.maxStack[this.maxStack.length-1].count--;
                    }
                    else{
                        this.maxStack.pop();
                    }
                    return number;
                }
                else{
                    throw "is Empty";
                }
            }

            push(number){
                this.stack.push(number);
                if(this.maxStack.length>0){
                 var peek = this.maxStack[this.maxStack.length-1];
                 var max=Math.max(peek.value,number);
                 if(max==peek.value){
                    this.maxStack[this.maxStack.length-1].count++;
                 }
                 else{
                    this.maxStack.push(new this.maxWithCount(max,1));
                    
                 }
                }
                else{
                    
                    this.maxStack.push(new this.maxWithCount(number,1));
                }
                
            }
            print(){
                var debug="Stack: ";
                for(let i=0; i<this.stack.length;i++){
                    debug+=this.stack[i]+" ";
                }
                debug+="Max Stack: ";
                for(let i=0; i<this.maxStack.length;i++){
                    debug+=this.maxStack[i].value+" with Count "+this.maxStack[i].count+"  > ";
                }
                console.log(debug);
            }
          }
          var maxStack = new MaxStack();
          maxStack.push(4);
          maxStack.print();
          maxStack.push(6);
          maxStack.print();
          maxStack.push(3);
          maxStack.print();
          maxStack.push(3);
          maxStack.print();
          maxStack.push(3);
          maxStack.print();
          maxStack.push(3);
          maxStack.print();
          maxStack.pop();
          maxStack.print();
          maxStack.pop();
          maxStack.print();
          maxStack.pop();
      console.log("called");
          return "getMax called";
      };
}