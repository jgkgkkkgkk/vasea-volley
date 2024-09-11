import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../../services/main.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Member} from "../../models/member.modal";
import {Team} from "../../models/team.model";

export interface DialogDataContainer {
  data: any,
  parent: any;
}

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss'
})
export class MemberFormComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    'id': [null],
    'firstname': [null, Validators.required],
    'lastname': [null, Validators.required],
    'age': [null, Validators.required],
    'height': [null, Validators.required],
    'email': [null, Validators.required],
    'teamId': [null, Validators.required]
  });

  listTeams: Team[] | undefined | null;

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              public dialogRef: MatDialogRef<MemberFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) {
  }


  ngOnInit() {
    this.setFormData();

    this.mainService.getTeams().subscribe(downloadedTeams => {
      this.listTeams = downloadedTeams;
    });


  }

  setFormData(): void {
    this.formGroup.patchValue({
      id: this.data.data ? this.data.data.id : null,
      age: this.data.data ? this.data.data.age : null,
      lastname:  this.data.data ? this.data.data.lastname : null,
      firstname:  this.data.data ? this.data.data.firstname : null,
      height:  this.data.data ? this.data.data.height : null,
      email:  this.data.data ? this.data.data.email : null,
      teamId:  this.data.data ? this.data.data.teamId : null
    });
  }


  onSubmit(member: Member) {
    if (this.data.data) {
      this.mainService.editMember(member.id, member).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    } else {
      this.mainService.addMember(member).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    }
  }

  getButtonText(): String {
    return this.data.data ? 'Сохранить' : 'Добавить';
  }



}
