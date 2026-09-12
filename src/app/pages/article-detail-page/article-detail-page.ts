import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleRepositoryService } from '../../services/article-repository.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private articleRepositoryService: ArticleRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleNumber = params['articleNumber'];
      this.loadArticle(articleNumber);
    });
  }

  async loadArticle(articleNumber: string): Promise<void> { 
    try {
      this.loading = true;
      this.article = await this.articleRepositoryService.findArticleByNumber(articleNumber);
      this.notFound = !this.article;
    } catch (error) {
      console.error('Error loading article:', error);
      this.notFound = true;
    } finally {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/articles']);
  }
}
