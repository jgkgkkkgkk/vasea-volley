import { Component, Inject } from '@angular/core';
import { Team } from '../../models/team.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../../services/main.service';
import { ScheduleFormComponent, DialogDataContainer } from '../schedule-form/schedule-form.component';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.scss'
})
export class TeamFormComponent {
  formGroup: FormGroup = this.formBuilder.group({
    'day': [null, Validators.required],
    'time': [null, Validators.required],
    'lessonspupil': [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              public dialogRef: MatDialogRef<TeamFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) { }


              
  ngOnInit() {
  }

  onSubmit(team: Team) {
    this.mainService.addSchedule(team).subscribe(data => {
      this.data.parent.loadData();
      this.dialogRef.close();
    });
  }
}

  