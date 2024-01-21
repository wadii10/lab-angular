import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app_config';
import { Pub } from 'src/models/Pub';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  tab:Pub[] = GLOBAL._DB.pubs;

  constructor() { }

  save(pub:any):Observable<void>{
    //generer une req http en mode post vers le backend
    //return (this.httpClient.post<void>('localhot:8080/api', member));

    this.tab = [ ...this.tab, pub];
    return (new Observable(observer => observer.next()));
  }
}
