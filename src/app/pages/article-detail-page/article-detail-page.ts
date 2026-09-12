import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleRepositoryService } from '../../services/article-repository.service';

@Component({
  imports: [],
  selector: 'app-article-detail-page',
  styleUrl: './article-detail-page.scss',
  templateUrl: './article-detail-page.html',
})
export class ArticleDetailPage implements OnInit {

  article: Article | undefined;
  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private articleRepositoryService: ArticleRepositoryService
  ) { }

  ngOnInit(): void {
  }
}
