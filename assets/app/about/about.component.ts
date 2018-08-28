import {Component} from "@angular/core";
import {Title} from '@angular/platform-browser';
@Component({
    selector:'app-about',
    templateUrl:'about.component.html'
})
export class AboutComponent{
    ngOnInit(){
        
    }
 paragraph1=
 `Sean Sharma started with programming Java applications while interning at NASA's Jet Propulsion Lab.  He later moved onto Video Game Programming by leading and participating in multiple team projects for school which included sending video game data to back-end websites. During this time, he began setting up front-end websites on the side as a hobby.  After acquiring his
 Bachelor\'s Degree in Computer Science from the University of Southern California, he focused more on web development and perfecting back-end technologies.  He received his Master's Degree from the University of Southern California, and he has been freelancing for clients since 2017 while constantly learning new technologies to improve his methods.  
` ;
paragraph2=
`
His hobbies include swimming, running, working out, playing with his pets, playing video games, learning new technologies, and of course programming. He resides in California enjoying life as a newly wed.<br>
Currently, I spend a lot of my free time on leetcode. I participate in the weekly online programming contests to improve my algorithmic problem solving abilities, and solve problems daily for fun. I post my solutions with explanations in the discussion boards.
<a href ="https://leetcode.com/seanmsha/" target="_blank">https://leetcode.com/seanmsha/</a>
Example of solution explanation: <a href="https://leetcode.com/problems/all-possible-full-binary-trees/discuss/163433/Java-Recursive-Solution-with-Explanation" target="_blank">https://leetcode.com/problems/all-possible-full-binary-trees/discuss/163433/Java-Recursive-Solution-with-Explanation</a>
`;
}