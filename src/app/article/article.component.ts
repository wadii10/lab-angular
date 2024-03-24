import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Pub } from 'src/models/Pub';
import { PublicationformComponent } from '../publicationform/publicationform.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(private AS:ArticleService, private dialog:MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(PublicationformComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {console.log("Dialog output:", data) ; 
      this.AS.save(data).subscribe( ()=> {
        this.dataSource = this.AS.tab;
      })
    }
  );
  }

  onDelete(id:string):void{
    
    
  }
  
  dataSource : Pub[] = this.AS.tab;

  displayedColumns: string[] = ['id' ,'titre', 'date', 'lien', 'type','sourcePdf', 'action'];

  
}
