import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app_config';
import { Pub } from 'src/models/Pub';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  tab:Pub[] = GLOBAL._DB.pubs;

  constructor() { }
}
