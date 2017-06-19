import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Portfolio } from './model/Portfolio';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {

    portfolios: Array<Portfolio> = Array<Portfolio>();

    constructor() {

        for (var i = 0; i < 8; i++) {
            this.portfolios.push({
                heading: Math.random().toString(36).slice(5),
                subHeading: Math.random().toString(36).slice(1),
                thumbnailImageUrl: "https://img.memecdn.com/soon-my-friend-soon_o_175785.jpg"
            });
        }
    }

    ngOnInit() {
    }

}
