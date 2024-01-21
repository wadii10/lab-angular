import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-publicationform',
  templateUrl: './publicationform.component.html',
  styleUrls: ['./publicationform.component.css']
})
export class PublicationformComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PublicationformComponent>) {}

  form!: FormGroup;

  ngOnInit():void {
    this.initForm();
  }

  initForm():void {
    this.form = new FormGroup({
      type:new FormControl(null, [Validators.required]),
      titre:new FormControl(null, [Validators.required]),
      lien:new FormControl(null, [Validators.required]),
      sourcePdf:new FormControl(null, [Validators.required]),
      date:new FormControl(null, [Validators.required])
    })
  }

  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
