import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule  } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ArticleComponent,
    EventComponent,
    LoginComponent,
    PublicationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    FirebaseModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { FirebaseModule } from 'src/Firebase.module-2';
import { LoginComponent } from './login/login.component';
import { PublicationformComponent } from './publicationform/publicationform.component';

