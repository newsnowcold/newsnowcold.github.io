import { Component, HostListener } from '@angular/core';

import { stickyNavBarAnimation } from './_animations/index'

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ stickyNavBarAnimation ]
})
export class AppComponent {
    state: string = 'init';


    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      var currentScrolltop = $($event.currentTarget).scrollTop();

      if (currentScrolltop > 100 && currentScrolltop < 200) {
        this.state = 'partial-scrolled';
      } else if (currentScrolltop >= 200) {
        this.state = 'scrolled';
      } else {
        this.state = 'init';
      }
    } 
}
