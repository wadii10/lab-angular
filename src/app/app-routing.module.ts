import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'members',pathMatch:'full', component:MemberComponent},
  {path:'createMember', pathMatch:'full', component:MemberFormComponent},
  {path:'editMember/:id', pathMatch:'full', component:MemberFormComponent},
  {path:'dashboard', pathMatch:'full', component:DashboardComponent},
  {path:'tools', pathMatch:'full', component:ToolsComponent},
  {path:'articles', pathMatch:'full', component:ArticleComponent},
  {path:'events', pathMatch:'full', component:EventComponent},
  {path:'login', pathMatch:'full', component:LoginComponent},
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'**', pathMatch:'full', redirectTo:'members'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
