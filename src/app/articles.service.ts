import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/http";

@Injectable({
    providedIn: 'root',
})

export class HeroService {
    constructor(private http: HttpClient) {
    }

    getCallback() {
        return this.http.get(http://localhost:8080/users);
    }
    
}