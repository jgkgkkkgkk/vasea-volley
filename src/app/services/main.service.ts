import {Inject, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Team} from "../models/team.model";
import {TeamMember} from "../models/team-member.model";
import {User} from "../models/user.model";
import {Hollyday} from '../models/hollyday.model';
import {Schedule} from "../models/schedule.model";


@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(private http: HttpClient,
  ) {
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8083/api/users/list')
  }


  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>('http://localhost:8083/api/schedule/list');
  }

  addSchedule(schedule: any): Observable<Schedule> {
    return this.http.post<Schedule>('http://localhost:8083/api/schedule/save', schedule);
  }

  deleteSchedule(id: number) {
    return this.http.delete(`http://localhost:8083/api/schedule/${id}`);
  }

  deleteTeam(id: number) {
    return this.http.delete(`http://localhost:8083/api/teams/${id}`);
  }
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8083/api/teams/list');
  }


  editTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8083/api/teams/list');
  }
 

  addTeam(team: any): Observable<Team> {
    return this.http.post<Team>('http://localhost:8083/api/teams/save', team);
  }

  getHollydays(): Observable<Hollyday[]> {
    const hollydays: Hollyday[] = [{
      id: 1,
      name: 'Hollyday 1',
      description: 'test description 1',
      startDate: new Date()
    }, {
      id: 1,
      name: 'Hollyday2',
      description: 'test description 2',
      startDate: new Date()
    }, {
      id: 1,
      name: 'Hollyday3',
      description: 'test description 3',
      startDate: new Date()
    }];
    return of(hollydays);
  }

  getMembersByTeamId(id: number): Observable<any> {

    const dummyMembers: TeamMember[] = [{
      id: 1,
      teamId: 1,
      firstName: 'Alina',
      lastName: 'Petrova',
      age: 15,
      height: 165,
    }, {
      id: 2,
      teamId: 1,
      firstName: 'Vika',
      lastName: 'Ivanova',
      age: 15,
      height: 165,
    }, {
      id: 3,
      teamId: 1,
      firstName: 'Alexa',
      lastName: 'Popova',
      age: 14,
      height: 165,
    }, {
      id: 4,
      teamId: 2,
      firstName: 'Anea',
      lastName: 'Petrova',
      age: 15,
      height: 165,
    }, {
      id: 5,
      teamId: 2,
      firstName: 'Natasha',
      lastName: 'Ivanova',
      age: 15,
      height: 165,
    }, {
      id: 6,
      teamId: 2,
      firstName: 'Pasha',
      lastName: 'Popova',
      age: 14,
      height: 165,
    }, {
      id: 7,
      teamId: 3,
      firstName: 'Vlada',
      lastName: 'Petrova',
      age: 15,
      height: 165,
    }, {
      id: 8,
      teamId: 3,
      firstName: 'Masha',
      lastName: 'Ivanova',
      age: 15,
      height: 165,
    }, {
      id: 9,
      teamId: 3,
      firstName: 'Dasha',
      lastName: 'Popova',
      age: 14,
      height: 165,
    }
    ]
    return of(dummyMembers.filter(el => el.teamId == id))
  }


}
