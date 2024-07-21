import { Component, Inject, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { Team } from "../models/team.model";
import { User } from "../models/user.model";
import { Hollyday } from '../models/hollyday.model';
import { HollyDayDialogComponent } from './hollyday-dialog/hollyday-dialog.component';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent implements OnInit {
  public shedules: any;
  public teams: Team[] = [];
  public users: User[] = [];
  public hollydays: Hollyday[] = [];
  public membersByTeamId: any;
  public prizes: any;


  constructor(private mainService: MainService,
    public dialog: MatDialog,
  ) {


  }

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

  onTeamClick(team: any) {
    this.mainService.getMembersByTeamId(team.id).subscribe(data => {
      this.membersByTeamId = data;
      this.dialog.open(EditDialogComponent, {
        data: {
          team: team,
          members: data
        }
      });
    });
  }

  onHollydayClick(hollyday: any) {
    this.dialog.open(HollyDayDialogComponent, {
      data: {
        hollyday: hollyday
      }
    });
  }
}


