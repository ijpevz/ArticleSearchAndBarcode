import { Injectable } from '@angular/core';
import { sleep } from '../utils/sleep.utils';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})

export class ArticleRepositoryService { 
    async findArticleByNumber(articleNumber: string): Promise<Article | undefined> { 
        await sleep(50);
        return articles.find(article => article.articleNumber === articleNumber);
     }

     async findAll(filter?: { articleDescription_contains?: string }): Promise<Article[]> {
        await sleep(200);
        return [...articles].filter(article => 
            filter?.articleDescription_contains ? article.articleDescription.includes(filter.articleDescription_contains) : true
        );
     }
 }

 export const articles: Article[] = [{
  'id': '1',
  'articleDescription': 'Apple',
  'articleNumber': '9938998340718',
  'weight': 258
},
  {
    'id': '2',
    'articleDescription': 'Banana',
    'articleNumber': '4204596771631',
    'weight': 271
  },
  {
    'id': '3',
    'articleDescription': 'Cherry',
    'articleNumber': '3317052953931',
    'weight': 252
  },
  {
    'id': '4',
    'articleDescription': 'Date',
    'articleNumber': '3928688443759',
    'weight': 235
  },
  {
    'id': '5',
    'articleDescription': 'Strawberry',
    'articleNumber': '6776350198704',
    'weight': 224
  },
  {
    'id': '6',
    'articleDescription': 'Fig',
    'articleNumber': '3959076964368',
    'weight': 726
  },
  {
    'id': '7',
    'articleDescription': 'Pomegranate',
    'articleNumber': '7120288521499',
    'weight': 678
  },
  {
    'id': '8',
    'articleDescription': 'Raspberry',
    'articleNumber': '6335560967176',
    'weight': 497
  },
  {
    'id': '9',
    'articleDescription': 'Red Currant',
    'articleNumber': '5739082848986',
    'weight': 543
  },
  {
    'id': '10',
    'articleDescription': 'Kiwi',
    'articleNumber': '9787393590136',
    'weight': 660
  },
  {
    'id': '11',
    'articleDescription': 'Lime',
    'articleNumber': '2345472441927',
    'weight': 749
  },
  {
    'id': '12',
    'articleDescription': 'Mango',
    'articleNumber': '8315552007494',
    'weight': 202
  },
  {
    'id': '13',
    'articleDescription': 'Nectarine',
    'articleNumber': '5822251640070',
    'weight': 635
  },
  {
    'id': '14',
    'articleDescription': 'Orange',
    'articleNumber': '6586344891957',
    'weight': 275
  },
  {
    'id': '15',
    'articleDescription': 'Papaya',
    'articleNumber': '3720842514124',
    'weight': 800
  },
  {
    'id': '16',
    'articleDescription': 'Quince',
    'articleNumber': '5417978797270',
    'weight': 611
  },
  {
    'id': '17',
    'articleDescription': 'Gooseberry',
    'articleNumber': '9292424856275',
    'weight': 688
  },
  {
    'id': '18',
    'articleDescription': 'Tamarind',
    'articleNumber': '4460360926418',
    'weight': 375
  },
  {
    'id': '19',
    'articleDescription': 'Ugli Fruit',
    'articleNumber': '6708776122565',
    'weight': 257
  },
  {
    'id': '20',
    'articleDescription': 'Watermelon',
    'articleNumber': '2846668421427',
    'weight': 482
  },
  {
    'id': '21',
    'articleDescription': 'Grapefruit',
    'articleNumber': '9828292388064',
    'weight': 206
  },
  {
    'id': '22',
    'articleDescription': 'Blueberry',
    'articleNumber': '2146835163185',
    'weight': 279
  },
  {
    'id': '23',
    'articleDescription': 'Blackberry',
    'articleNumber': '6753238579862',
    'weight': 269
  },
  {
    'id': '24',
    'articleDescription': 'Peach',
    'articleNumber': '4369247049028',
    'weight': 737
  },
  {
    'id': '25',
    'articleDescription': 'Coconut',
    'articleNumber': '1745617690730',
    'weight': 748
  },
  {
    'id': '26',
    'articleDescription': 'Grape',
    'articleNumber': '3367750583926',
    'weight': 269
  },
  {
    'id': '27',
    'articleDescription': 'Melon',
    'articleNumber': '8913848270953',
    'weight': 786
  },
  {
    'id': '28',
    'articleDescription': 'Plum',
    'articleNumber': '9043021247819',
    'weight': 526
  },
  {
    'id': '29',
    'articleDescription': 'Pear',
    'articleNumber': '2298938523454',
    'weight': 514
  },
  {
    'id': '30',
    'articleDescription': 'Passion Fruit',
    'articleNumber': '8864045581667',
    'weight': 561
  },
  {
    'id': '31',
    'articleDescription': 'Persimmon',
    'articleNumber': '2133932460306',
    'weight': 227
  },
  {
    'id': '32',
    'articleDescription': 'Pineapple',
    'articleNumber': '9871410324580',
    'weight': 690
  },
  {
    'id': '33',
    'articleDescription': 'Cranberry',
    'articleNumber': '7636200707992',
    'weight': 577
  },
  {
    'id': '34',
    'articleDescription': 'Lychee',
    'articleNumber': '9587463983376',
    'weight': 276
  },
  {
    'id': '35',
    'articleDescription': 'Jackfruit',
    'articleNumber': '5895576234406',
    'weight': 763
  },
  {
    'id': '36',
    'articleDescription': 'Durian',
    'articleNumber': '2108964395735',
    'weight': 262
  },
  {
    'id': '37',
    'articleDescription': 'Starfruit',
    'articleNumber': '1839291944226',
    'weight': 719
  },
  {
    'id': '38',
    'articleDescription': 'Mulberry',
    'articleNumber': '1051365429504',
    'weight': 345
  },
  {
    'id': '39',
    'articleDescription': 'Cantaloupe',
    'articleNumber': '9422564169518',
    'weight': 313
  },
  {
    'id': '40',
    'articleDescription': 'Avocado',
    'articleNumber': '5973076900158',
    'weight': 285
  },
  {
    'id': '41',
    'articleDescription': 'Boysenberry',
    'articleNumber': '5268443998458',
    'weight': 587
  },
  {
    'id': '42',
    'articleDescription': 'Elderberry',
    'articleNumber': '3848033471837',
    'weight': 739
  },
  {
    'id': '43',
    'articleDescription': 'Kumquat',
    'articleNumber': '6896333137518',
    'weight': 624
  },
  {
    'id': '44',
    'articleDescription': 'Salak',
    'articleNumber': '3647947468137',
    'weight': 468
  },
  {
    'id': '45',
    'articleDescription': 'Longan',
    'articleNumber': '6934943293353',
    'weight': 779
  },
  {
    'id': '46',
    'articleDescription': 'Soursop',
    'articleNumber': '6279598130347',
    'weight': 576
  },
  {
    'id': '47',
    'articleDescription': 'Cloudberry',
    'articleNumber': '1260215938736',
    'weight': 259
  },
  {
    'id': '48',
    'articleDescription': 'Jujube',
    'articleNumber': '8013990507670',
    'weight': 207
  },
  {
    'id': '49',
    'articleDescription': 'Sapodilla',
    'articleNumber': '7890939644127',
    'weight': 438
  },
  {
    'id': '50',
    'articleDescription': 'Horned Melon',
    'articleNumber': '8961039058915',
    'weight': 562
  }]