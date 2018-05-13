import { Component } from "@angular/core";
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.paragraph1 = "Web Developer Sean Sharma started with general programming while interning at NASA's Jet Propulsion Lab.  He later moved onto Video Game Programming by leading and participating in multiple team projects for school which included sending video game data to back-end websites. During this time, he began setting up front-end websites on the side as a hobby.  After acquiring his\n Bachelor's Degree in Computer Science from the University of Southern California, he focused more on web development and perfecting back-end technologies.  He received his Master's Degree from the University of Southern California, and he has been freelancing for clients since 2017 while constantly learning new technologies to improve his methods.  \n";
        this.paragraph2 = "\nCurrently, his hobbies include swimming, running, working out, playing with his pets, playing video games, learning new technologies, and of course programming. He resides in California enjoying life as a newly wed.\n";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-about',
                    templateUrl: 'about.component.html'
                },] },
    ];
    return AboutComponent;
}());
export { AboutComponent };
