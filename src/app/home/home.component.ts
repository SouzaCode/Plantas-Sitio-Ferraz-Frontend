import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AllPlants } from '../shared/plants.interfaces';
import { HomeService } from './home.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private homeService: HomeService) {
     }

    ngOnInit() {
        this.homeService.getAllPlants().
        subscribe(
            dt =>{
                
                this.homeService.plantas = dt
                console.log(this.homeService.plantas);
                
            }
        );
        
    }


}
