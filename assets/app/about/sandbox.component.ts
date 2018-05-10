import {Component} from "@angular/core";

@Component({
    selector:'app-sandbox',
    templateUrl:'sandbox.component.html'
})
export class SandBoxComponent{

getClosedIntervals=function(){
    
    function combineIntervals(addedInterval,intervals){
        var result=[];
        var i=0;
        var start=addedInterval.sp;
        var end = addedInterval.ep;
        var overlapped=false;
        //0 2
        //-6,4
        while(i<intervals.length){
            var current= intervals[i];
            if((addedInterval.sp<=current.ep&& addedInterval.sp>=current.sp)||(addedInterval.ep<=current.ep)&&
            (addedInterval.ep>=current.sp)||(addedInterval.sp<=current.sp&&addedInterval.ep>=current.ep)){
                 var curStart=Math.min(addedInterval.sp,current.sp);
                    start=Math.min(start,curStart);
                    var curEnd=Math.max(addedInterval.ep,end);
                    end=Math.max(end,curEnd);
                    overlapped=true;
            }
            else{
                if(overlapped){
                    result.push(new Interval(start,end));
                    
                    overlapped=false;
                }
              
                    result.push(current);
                
            }
           i++;
        }
        return result;

    }
    class Interval{
        sp:Number;
        ep:Number;
        constructor(sp,ep){
            this.sp=sp;
            this.ep=ep;
        }
    }
    var intervals = [
        new Interval(-4,-1),
        new Interval(0,2),
        new Interval(3,6),
        new Interval(7,9),
        new Interval(11,12),
        new Interval(14,17)
    ];
    var interval = new Interval(-1,6);
    console.log(combineIntervals(interval,intervals));
    return "Combining Intervals";
}

    getSubStrings=function(){
        function getStrings(sentence, words){
            var result=[];
            if ( words.length===0 ){ 
                return result;
            }
            var wordsToFreq = new Map();
            for(let i=0; i<words.length;i++){
                if(wordsToFreq.has(words[i])){
                    let freq=Number(wordsToFreq.get(words[i]));
                    freq++;
                    wordsToFreq.set(words[i],freq+1);
                }
                else{
                    wordsToFreq.set(words[i],1);
                }
            }
            for(let i=0; i<sentence.length-words.length*words[0].length;i++){
                var startingIdx=i;
                var endingIdx=i+words.length*words[0].length;
                var sentenceToFreq= new Map();
                for(let j=startingIdx;j<endingIdx;j+=words[0].length){
                    
                    var word= sentence.substring(j,j+words[0].length);
                   
                    if(sentenceToFreq.has(word)){
                        let freq = Number(sentenceToFreq.get(word));
                        freq++;
                        sentenceToFreq.set(word,freq);
                    }
                    else{
                        sentenceToFreq.set(word,1);
                    }
                  
                }
                var matches=true;
                console.log(wordsToFreq);
                console.log(wordsToFreq.entries());
                for (let [key , value] of wordsToFreq) {
                  
                    console.log(called);
                    var wordFreq=Number(value);
                 
                    if(!sentenceToFreq.has(key)){
                        matches=false;
                        break;
                    }
                    var sentFreq= Number(wordsToFreq.get(key));
                    console.log(key+" "+sentFreq+" "+wordFreq);
                    if(sentFreq!=wordsFreq){
                        matches=false;
                        break;
                    }
                }
                if(matches==true){
                    result.push(sentence.substring(startingIdx,endingIdx));
                }


            }
            return result;
        }
        var sentence="amanaplanacanal";
        var word= [
            "can",
            "apl",
            "ana"
        ];
        console.log(getStrings(sentence,word));
        return "getSubString called";
    }
    getSubsetInOrderPhrase=function(){
         function subsetInOrderPhrase(words, keywords){
             //toDo
            var map={};
            var min=Number.MAX_VALUE;
            var minTotal=Number.MAX_VALUE;
            var maxTotal=Number.MIN_VALUE;
            for(let i=0; i<keywords.length;i++){
                var current= keywords[i];
                var inOrder=true;
                var inKeyWords=false;
                for(let j=0; j<keywords.length;j++){
                    if(keywords[j]==current){
                        inKeyWords=true;
                        break;
                    }
                    if(i>keywords[j]){
                        inOrder=false;
                        break;
                    }
                    
                }

                if(inOrder && inKeyWords){
                    map[current]=i;
                    minTotal=Math.min(map[keywords[0]],minTotal);
                    maxTotal=Math.max(map[keywords[keywords.length-1]],maxTotal);

                }



            }
            console.log(maxTotal);
            var result=[];
            for(let i=minTotal; i<=maxTotal;i++){
                result[i]=words[i];
            }
            return result;
         }
         var keywords = ["save", "order"];
         var words=["In",//0
         "order",//1
         "to",//2
         "save",//3
         
         "the","program","he","had","to","order","it", "to","save","the","order"];

         console.log(subsetInOrderPhrase(words,keywords));

         return "shortest in order sequence of words";
    }
    closestEqualString=function(){

        function closestEqual(words){
            var map = {};
            var minLength=Number.MAX_VALUE;
            for(let i=0; i< words.length;i++){
                
                if(words[i] in map){
                    minLength=Math.min(minLength,i-map[words[i]]);
            
                }
                else
                    {
                
                    }
                map[words[i]]=i;
            }
            
            return minLength;

        }
        var input=["testt","me","tst","testt","sd","sadaf","me"];
        console.log(closestEqual(input));
        return "Closest equal string";

    }
    coversInterval=function(){
        class Interval{
            startingPoint: Number;
            endingPoint: Number;
            constructor(startingPoint,endingPoint){
                this.startingPoint=startingPoint;
                this.endingPoint=endingPoint;
            }
        }
        function minToCoverIntervals(intervals){
            var result = [];
            var sortedIntervals=intervals.sort(function(a,b){
                return a.endingPoint-b.endingPoint;
            });


           let i=0;
           let j=0;
           while(i<intervals.length)
            {   
                let currentBest= intervals[i].endingPoint;
                j=i+1;
                while(j<intervals.length&& intervals[j].startingPoint<=intervals[i].endingPoint)
                {
                    currentBest=Math.min(intervals[j].endingPoint,currentBest);
                    j++;
                }
                result.push(currentBest);
                i=j;
            }
            return result;
        }
        var intervals = [new Interval(0,3),
        new Interval(3,4),
        new Interval(2,6),
        new Interval(6,9)];
        var intervals2 = [
            new Interval(1,2),
            new Interval(2,3),
            new Interval(3,4),
            new Interval(2,3),
            new Interval(3,4),
            new Interval(4,5),
            new Interval(1,2),
            new Interval(2,3),
            new Interval(2,3),
            new Interval(3,4),
            new Interval(3,4),
            new Interval(4,5)
        ];
        console.log(minToCoverIntervals(intervals));
        console.log(minToCoverIntervals(intervals2));
        return "Min To cover intervals called";
    }
    isThreeSum=function(){
        function hasTwoSum(n, sorted){
            let i=0;
            let j=sorted.length-1;
            while(i<=j){
                var sum = sorted[i]+sorted[j];
                if(sum==n)return true;
                if(sum<n){
                    i++;
                }
                else{
                    j--;
                }
            }
            return false;
        }
        function hasThreeSum(n,numbers){
            var sorted=numbers.sort(function(a,b){return a-b});
            for(let i=0; i<sorted.length;i++){
                var t = n-sorted[i];
                if(hasTwoSum(t,sorted)){
                    return true;
                }
            }
            return false;
        }
        var numbers=[6,7,10,3];
        console.log("Three Sum"+hasThreeSum(16,numbers));
        console.log(hasThreeSum(16,numbers));
        console.log(hasThreeSum(25,numbers));
        console.log(hasThreeSum(100,numbers));
        console.log(hasThreeSum(8,numbers));
        return "Three Sum validation";
    }
    minPathTriangle=function(){
        function getMin(triangle){
            var height=triangle.length;
            var width=triangle[triangle.length-1];
            var minPath=[];
           
            minPath[0]=triangle[0][0];
            console.log(triangle[0][0]);
            var previousRow=minPath;
            var j=1;
           var currentWidth=2;
            while(j<height){
                var currentRow=triangle[j].slice();
                console.log(currentRow);
                var currentMin=[];
                for(let i=0; i< currentWidth;i++){
                    var curValue=currentRow[i];
                    currentRow[i]=Number.MAX_VALUE;
                    if(i>0)
                    {
                        currentRow[i]=previousRow[i-1]+curValue;
                    }
                    if(i<currentWidth-1)
                    {
                        currentRow[i]=Math.min(previousRow[i]+curValue,currentRow[i]);
                    }
                }
                j++;
                currentWidth++;
                previousRow=currentRow;
            }
            var minMin=currentRow[0];
            for(let i=1; i<currentWidth-1;i++){
                minMin=Math.min(currentRow[i],minMin);
            }
            return minMin;
        }
        var triangle=[[2],
                [4,4],
                [8,5,6],
                [4,2,6,2],
                [1,5,2,3,4]
            ];
            console.log("Min Path"+getMin(triangle));
            return "Min Triangle Path";



    }

    isInDictionary=function(){
        function isValid(dictionary,input){
            var opt=[];
            opt[0]=true;
             for(let i=1; i<=input.length;i++)
            {
                opt[i]=false;
                for(let j=0;j<i;j++){
                 
                    var found=(dictionary[input.substring(j,i)])==true;
                    if(opt[j]==true&& (dictionary[input.substring(j,i)])==true)
                    {
                        opt[i]=true;
                    }
                   
                }  
                console.log(i+"i "+opt[i]); 
            }
            return opt[input.length];
        }
        var dictionary={"team":true,"m":true,"me":true};
        console.log(isValid(dictionary,"teammme"));
        console.log(isValid(dictionary,"teamp"));
        return "isInDictionary called";
    }
    isPalindrome=function(){
        function isPalindrome(input){
            var regex=/^[0-9a-zA-Z]+$/;
            var i=0;
            var j=input.length-1;
            console.log(input);
            var iChar=input[i];
            var jChar = input[j];
            while(i<j)
            {
               iChar=input[i];
               jChar=input[j];
                while((iChar.match(regex)==null)&& i<j){
             
                    i++;
                    iChar=input[i];
                }
                while((jChar.match(regex)==null)&&i<j){
                 
                    j--;
                    jChar=input[j];
                }
                if(iChar.toLowerCase()!=jChar.toLowerCase()){
                    console.log(iChar);
                    console.log(jChar);
                    return false;
                }
                else{
                    console.log(iChar);
                    console.log(jChar);
                }
                i++;
                j--;
            }
            return true;

        }
        console.log("Test abcdedcba "+isPalindrome("abcdedcba"));
        console.log("Test !abc!b!a "+isPalindrome("!abc!b!a"));
        console.log("Test abcdef "+isPalindrome("abcdef"));
        return "Palindrome Test";
    }
    generateSubset=function()
    {
        function copy(o) {
            var output, v, key;
            output = Array.isArray(o) ? [] : {};
            for (key in o) {
                v = o[key];
                output[key] = (typeof v === "object") ? copy(v) : v;
            }
            return output;
         }
        function generate(n,k){
            var result=[];
            var current = [];
            result=recurse(1,result,current,n,k);
            return result;
        }
        function recurse(place,result,current,n,k)
        {
           
            if(place==k+1){
                
                //var newversion=copy(current);
               // console.log(newversion);
                result.push(current.slice());
              
            }
            else
                {
                    for(let i=place; i<=n;i++){
                        current.push(i);
                        result=recurse(place+1,result,current,n,k);
                        current.pop();
                    }
                }
                return result;

        }
        function print(result){
            var debug="Result: ";
            for(let i=0;i<result.length;i++){
                debug+="{ ";
                for(let j=0; j< result[i].length;j++){
                    debug+=result[i][j]+",";
                }
                debug+=" } "
            }
            
            console.log(debug);
        }
        var result=generate(5,3);
        print(result);
       console.log("Generated all subsets from 1 to n (5) of size k (3)");
        return "Generates all subsets from 1 to n (5) of size k (3)";
    };

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