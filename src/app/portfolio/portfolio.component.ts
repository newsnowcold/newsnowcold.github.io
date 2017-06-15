import { Component, OnInit } from '@angular/core';

import { Portfolio } from './model/Portfolio';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    portfolios: Array<Portfolio> = Array<Portfolio>();

    constructor() {

        for (var i = 0; i <= 6; i++) {
            this.portfolios.push({
                heading: Math.random().toString(36).slice(5),
                subHeading: Math.random().toString(36).slice(1),
                thumbnailImageUrl: ""
            });
        }
    }

    ngOnInit() {
    }

}
