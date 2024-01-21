import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute) {};
  form!:FormGroup;
  existMember!:Member;
  ngOnInit(): void {
    //recuperation id de url
    const idCourant = this.activatedRoute.snapshot.params['id'];
    //console.log(idCourant);
    if(!!idCourant) {
      this.MS.getMemberById(idCourant).subscribe((a) => {
        this.existMember = a;
        this.initForm1(a);
      })
    }
    // if id exist
    // dans edit 
    // get member by id => this.initForm(m)
    // else
    else {
      this.initForm();
    }
  }

  initForm():void {
    this.form = new FormGroup({
      cin:new FormControl(null, [Validators.required]),
      name:new FormControl(null, [Validators.required]),
      cv:new FormControl(null, [Validators.required]),
      type:new FormControl(null, [Validators.required])
    })
  }

  initForm1(m:Member):void {
    this.form = new FormGroup({
      cin:new FormControl(m.cin, [Validators.required]),
      name:new FormControl(m.name, [Validators.required]),
      cv:new FormControl(m.cv, [Validators.required]),
      type:new FormControl(m.type, [Validators.required])
    })
  }

  onSub():void {
    const memberToSave = this.form.value;
    const newMemmber = { ...this.existMember, ...memberToSave }
    this.MS.save(newMemmber).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
}
