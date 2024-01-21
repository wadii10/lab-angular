import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  // forçage de type
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  title = "Are you sure?";
  content = "do you realy want to remove";
  cancel = "cancel";
  confirm = "confirm";

}
