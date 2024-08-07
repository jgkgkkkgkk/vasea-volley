import { Component, Inject, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../../services/main.service';



export interface DialogDataContainer {
  data: any,
  parent: any;
}

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.scss'
})


export class TeamFormComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    'id': [null],
    'name': [null, Validators.required],
    'age': [null, Validators.required],

  });

  constructor(private formBuilder: FormBuilder,
    private mainService: MainService,
    public dialogRef: MatDialogRef<TeamFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) { }



  ngOnInit() {
    this.setFormData();
  }

  setFormData(): void {
    this.formGroup.patchValue({
      id: this.data.data ? this.data.data.id : null,
      name: this.data.data ? this.data.data.name : null,
      age: this.data.data ? this.data.data.age : null
    });
  }


  onSubmit(team: Team) {
    if (this.data.data) {
      this.mainService.editTeam(team.id, team).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    } else {
      this.mainService.addTeam(team).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    }
  }

  getButtonText(): String {
    return this.data.data ? 'Сохранить' : 'Добавить';
  }
}

