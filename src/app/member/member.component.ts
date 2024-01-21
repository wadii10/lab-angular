import { Component, OnDestroy, OnInit } from '@angular/core';
import { GLOBAL } from '../app_config';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  // data binding sens 1 (from ts to html)
  dataSource : Member[] = this.MS.tab;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate', 'cv', 'type', 'action'];

  constructor(private MS:MemberService, private dialog:MatDialog ) {};

  onDelete(id:string):void{
    // lancer le dialog
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    // j'attend le retour
    dialogRef.afterClosed().subscribe( (test) => {
      
      if (test) {
        this.MS.deleteMember(id).subscribe(() => {
          this.getAllMembers();
        })
      }

    })
    
  }

  getAllMembers():void{
    this.MS.getAll().subscribe((data)=>{
      this.dataSource = data;
    })
  }
}
