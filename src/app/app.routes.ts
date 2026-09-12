import { Routes } from '@angular/router';
import { ArticleListPage } from './pages/article-list-page/article-list-page';
import { ArticleDetailPage } from './pages/article-detail-page/article-detail-page';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'articles'
    },
    {
        path: 'articles',
        component: ArticleListPage
    },
    {
        path: 'articles/:articleNumber',
        component: ArticleDetailPage
    }
];


export class AppRoutingModule { }