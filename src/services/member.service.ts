import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app_config';
import { Member } from 'src/models/Member';
import { HttpClient } from '@angular/common/http';
import { MatCardLgImage } from '@angular/material/card';


//dans le composant member-form injection de dependence(service http)
@Injectable({
  providedIn: 'root'
})

export class MemberService {

  tab:Member[] = GLOBAL._DB.members;

  getAll():Observable<Member[]>{
    // return (this.httpClient.get<Member[]>('localhot:8080/api/allMember'));
    return (new Observable(observer => observer.next(this.tab)));
  }

  save(member:any):Observable<void>{
    //generer une req http en mode post vers le backend
    //return (this.httpClient.post<void>('localhot:8080/api', member));

    const memberNew = { ...member, id:member.id??(Math.ceil(Math.random()*10000)).toString(), createDate: new Date().toISOString()}
   
    this.tab = [ ...this.tab.filter( el => el.id != member.id), memberNew]
   
    return (new Observable(observer => observer.next()));
  }

  getMemberById(id:string):Observable<Member>{
    return ( new Observable(observer => observer.next(this.tab.find( item => item.id==id ))) )
    //return ((this.httpClient.get<Member>('localhot:8080/api/members/id')));
  }

  deleteMember(id:string):Observable<void>{

    this.tab = this.tab.filter( (item) => item.id != id )
    return ( new Observable(observer => observer.next())) 
    //return ((this.httpClient.delete<void>('localhot:8080/api/members/id')));
  }

  constructor(private httpClient: HttpClient) {
  
   }
}
