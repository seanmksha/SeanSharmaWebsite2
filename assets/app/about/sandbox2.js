export function getClosedIntervals() {
    function combineIntervals(addedInterval, intervals) {
        var result = [];
        var i = 0;
        var start = Number.MAX_VALUE;
        var overlapped = false;
        while (i < intervals.length) {
            var current = intervals[i];
            if (addedInterval.sp <= current.ep && addedInterval.sp > current.sp) {
                if (!overlapped) {
                    start = Math.min(addedInterval.sp, current.sp);
                    overlapped = true;
                }
                else {
                }
            }
            else {
                if (overlapped) {
                    overlapped = false;
                    var end = Math.max(addedInterval.ep, current.ep);
                }
                result.push(current);
            }
        }
    }
    var Interval = /** @class */ (function () {
        function Interval(sp, ep) {
            this.sp = sp;
            this.ep = ep;
        }
        return Interval;
    }());
    var intervals = [
        new Interval(-4, -1),
        new Interval(0, 2),
        new Interval(3, 6),
        new Interval(7, 9),
        new Interval(11, 12),
        new Interval(14, 17)
    ];
}
export function getSubStrings() {
    function getStrings(sentence, words) {
        var result = [];
        if (words.length === 0) {
            return result;
        }
        var wordsToFreq = new Map();
        for (var i = 0; i < words.length; i++) {
            if (wordsToFreq.has(words[i])) {
                var freq = Number(wordsToFreq.get(words[i]));
                freq++;
                wordsToFreq.set(words[i], freq.toString());
            }
            else {
                wordsToFreq.set(words[i], "1");
            }
        }
        for (var i = 0; i < sentence.length - words.length * words[0].length; i++) {
            var startingIdx = i;
            var endingIdx = i + words.length * words[0].length;
            var sentenceToFreq = new Map();
            for (var j = startingIdx; j < endingIdx; j += words[0].length) {
                var word = sentence.substring(j, j + words[0].length);
                if (sentenceToFreq.has(word)) {
                    var freq = Number(sentenceToFreq.get(word));
                    freq++;
                    sentenceToFreq.set(word, freq.toString());
                }
                else {
                    sentenceToFreq.set(word, "1");
                }
            }
            var matches = true;
            console.log(wordsToFreq);
            console.log(wordsToFreq.entries());
            /*   for (let [key , value] of wordsToFreq.entries()) {
                          
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
                        }*/
            if (matches == true) {
                result.push(sentence.substring(startingIdx, endingIdx));
            }
        }
        return result;
    }
    var sentence = "amanaplanacanal";
    var word = [
        "can",
        "apl",
        "ana"
    ];
    console.log(getStrings(sentence, word));
    return "getSubString called";
}
