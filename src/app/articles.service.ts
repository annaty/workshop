import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ArticleService {
    constructor(private http: HttpClient) {
    }

    getArticles() {
        return this.http.get('http://localhost:8080/users');
    }

}
