import {Component, OnInit} from '@angular/core';
import {MainService} from "../services/main.service";
import {MatDialog} from "@angular/material/dialog";
import {Schedule} from "../models/schedule.model";
import {Team} from "../models/team.model";
import {User} from "../models/user.model";
import {Hollyday} from "../models/hollyday.model";
import {HollyDayDialogComponent} from "../lessons/hollyday-dialog/hollyday-dialog.component";
import {ScheduleFormComponent} from "./schedule-form/schedule-form.component";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit {

  public shedules: Schedule[] = [];
  public teams: Team[] = [];
  public users: User[] = [];
  public hollydays: Hollyday[] = [];

  displayedScheduleColumns = ['day','time','teacher', 'actions'];

  constructor(private mainService: MainService,
              public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.mainService.getSchedule().subscribe(data => {
      this.shedules = data;
    });
    this.mainService.getTeams().subscribe(data => {
      this.teams = data;
    });
    this.mainService.getUsers().subscribe(data => {
      this.users = data;
    });
    this.mainService.getHollydays().subscribe(data => {
      this.hollydays = data;
    });
  }

  addSchedule(): void {
    console.log('addSchedule');
    this.dialog.open(ScheduleFormComponent, {
      data: {

      }
    });
  }

  deleteSchedule(row: any): void {
    console.log('deleteSchedule - row', row);
  }

  editSchedule(row: any): void {
    console.log('editSchedule - row', row);
  }

}
