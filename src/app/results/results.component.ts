import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnDestroy{
  articles?: any;
  sub = new Subscription();

  constructor(private articlesService: ArticleService) {
    this.sub.add(
      this.articlesService.getArticles().subscribe(
        articles => {
          this.articles = articles;
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
