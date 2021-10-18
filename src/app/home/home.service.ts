import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { AllPlants } from "../shared/plants.interfaces";
import { environment } from "src/environments/environment";

@Injectable()
export class HomeService{
    constructor(private http: HttpClient) { }
    getAllPlants():Observable<AllPlants>{
        let ret:Observable<AllPlants>;
        ret = this.http.get<AllPlants>(environment.API_PATH+"/plants")
        
        return  ret;
    }
}