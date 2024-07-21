import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Team} from "../models/team.model";
import {TeamMember} from "../models/team-member.model";
import * as http from "http";
import {User} from "../models/user.model";
import { Team2 } from '../models/team2.model';
import { Team3 } from '../models/teams3';


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


  getSchedule()
    :
    Observable<any> {
    const dummyShedule = [{
      day: 'Monday',
      time: '16:00',
      teacher: 'Vasilii Focsha'
    }, {
      day: 'Wednesday',
      time: '16:00',
      teacher: 'Vasilii Focsha'
    }, {
      day: 'Friday',
      time: '16:00',
      teacher: 'Vasilii Focsha'
    }];
    return of(dummyShedule);
    // return this.http.get('https://api.publicapis.org/entries');


  }

  getTeams(): Observable<Team[]> {
    const dummyTeams2: Team[] = [ {
      id: 2,
      name: 'Junior roster',
      ages: '2010-2012'
    },];
    return of(dummyTeams2);
  }


  getTeams2(): Observable<Team2[]> {
    const dummyTeams2: Team2[] = [{
      id: 1,
      name: 'Adult composition',
      ages: '2008-2010'
    }]
    return of(dummyTeams2);
  }



  getTeams3(): Observable<Team3[]> {
    const dummyTeams2: Team3[] = [{
      id: 3,
      name: 'Соревнования ',
      ages: ''
    }]
    return of(dummyTeams2);
  }

  getMembersByTeamId(id: number): Observable<any> {

    const dummyMembers:TeamMember[] = [{
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
