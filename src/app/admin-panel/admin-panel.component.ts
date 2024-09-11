import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { MatDialog } from "@angular/material/dialog";
import { Schedule } from "../models/schedule.model";
import { Team } from "../models/team.model";
import { User } from "../models/user.model";
import { Hollyday } from "../models/hollyday.model";
import { ScheduleFormComponent } from "./schedule-form/schedule-form.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { TeamFormComponent } from "./team-form/team-form.component";
import { DeleteTeamModalComponent } from './delete-team-modal/delete-team-modal.component';
import { HollydayFormComponent } from './hollyday-form/hollyday-form.component';
import { DeleteHollydayComponent } from './delete-hollyday/delete-hollyday.component';
import {MemberFormComponent} from "./member-form/member-form.component";
import {Member} from "../models/member.modal";
import {DeleteMemberComponent} from "./delete-member/delete-member/delete-member.component";

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
  public member:Member[]=[];

  displayedScheduleColumns = ['day', 'time', 'teacher', 'actions'];
  displayedTeamColumns = ['name', 'age', 'actions'];
  displayedHollydayColumns = ['name', 'description','data', 'location', 'actions'];
  displayedMemberColumns = ['firstname', 'lastname','age', 'height', 'email', 'actions'];

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
    this.mainService.getHollyday().subscribe(data => {
      this.hollydays = data;
    });
    this.mainService.getMember().subscribe(data => {
      this.member = data;
    })
  }

  addSchedule(): void {
    this.dialog.open(ScheduleFormComponent, {
      data: {
        data: null,
        parent: this
      }
    });
  }

  editSchedule(row: any): void {
    console.log('editSchedule - row', row);
    this.dialog.open(ScheduleFormComponent, {
      data: {
        data: row,
        parent: this
      }
    });
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
        data: null,
        parent: this
      }
    });
  }

  deleteTeam(row: any): void {
    console.log('deleteTeam - row', row);
    this.dialog.open(DeleteTeamModalComponent, {
      data: {
        data: row,
        parent: this
      }
    })
  }

  editTeams(row: any): void {
    console.log('editTeams - row', row);
    this.dialog.open(TeamFormComponent, {
      data: {
        data: row,
        parent: this
      }
    });
  }

  addMember() {
    this.dialog.open(MemberFormComponent, {
      data: {
        data: null,
        parent: this
      }
    });
  }



  deleteMember(row: any): void {
    console.log('deleteMember - row', row);
    this.dialog.open(DeleteMemberComponent, {
      data: {
        data: row,
        parent: this
      }
    })
  }



  editMember(row: any): void {
    console.log('editMember - row', row);
    this.dialog.open(MemberFormComponent, {
      data: {
        data: row,
        parent: this
      }
    });
  }




  addHollyday() {
    this.dialog.open(HollydayFormComponent, {
      data: {
        data: null,
        parent: this
      }
    });
  }



  deleteHollyday(row: any): void {
    console.log('deleteHollyday - row', row);
    this.dialog.open(DeleteHollydayComponent, {
      data: {
        data: row,
        parent: this
      }
    })
  }



  editHollyday(row: any): void {
    console.log('editHollyday - row', row);
    this.dialog.open(HollydayFormComponent, {
      data: {
        data: row,
        parent: this
      }
    });
  }
}

