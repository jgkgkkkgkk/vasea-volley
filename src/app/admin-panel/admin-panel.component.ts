import {Component, OnInit} from '@angular/core';
import {MainService} from "../services/main.service";
import {MatDialog} from "@angular/material/dialog";
import {Schedule} from "../models/schedule.model";
import {Team} from "../models/team.model";
import {User} from "../models/user.model";
import {Hollyday} from "../models/hollyday.model";
import {ScheduleFormComponent} from "./schedule-form/schedule-form.component";
import {DeleteModalComponent} from "./delete-modal/delete-modal.component";
import {TeamFormComponent} from "./team-form/team-form.component";

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

  displayedScheduleColumns = ['day', 'time', 'teacher', 'actions'];
  displayedTeamColumns = ['name', 'age', 'actions'];


  constructor(private mainService: MainService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
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
    this.dialog.open(ScheduleFormComponent, {
      data: {
        parent: this
      }
    });
  }

  editSchedule(row: any): void {
    console.log('editSchedule - row', row);
  }

  deleteSchedule(row: any): void {
    console.log('deleteSchedule - row', row);
    this.dialog.open(DeleteModalComponent, {
      data: {
        data: row,
        parent: this
      }
    });
  }

  addTeams() {
    this.dialog.open(TeamFormComponent, {
      data: {
        parent: this
      }
    });
  }

  deleteTeams(row: any): void {
    console.log('deleteTeam - row', row);
    this.dialog.open(DeleteModalComponent, {
      data: {
        data: row,
        parent: this
      }
    })
  }

  editTeams(row: any): void {
    console.log('editSchedule - row', row);
  }

}

