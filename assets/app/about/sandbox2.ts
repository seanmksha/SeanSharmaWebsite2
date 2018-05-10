
export function getSubStrings(){
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
                wordsToFreq.set(words[i],freq.toString());
            }
            else{
                wordsToFreq.set(words[i],"1");
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
                    sentenceToFreq.set(word,freq.toString());
                }
                else{
                    sentenceToFreq.set(word,"1");
                }
              
            }
            var matches=true;
            console.log(wordsToFreq);
            console.log(wordsToFreq.entries());
            for (let [key , value] of wordsToFreq.entries()) {
              
                console.log("called");
                var wordFreq=Number(value);
             
                if(!sentenceToFreq.has(key)){
                    matches=false;
                    break;
                }
                var sentFreq= Number(wordsToFreq.get(key));
                console.log(key+" "+sentFreq+" "+wordFreq);
                if(sentFreq!=wordFreq){
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