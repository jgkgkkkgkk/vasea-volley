import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../models/team.model";
import {User} from "../models/user.model";
import {Hollyday} from '../models/hollyday.model';
import {Schedule} from "../models/schedule.model";
import {Member} from "../models/member.modal";
import {MemberDto} from "../models/memberDto.modal";


@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private http: HttpClient) {
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

  editSchedule(id: number, schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`http://localhost:8083/api/schedule/${id}`, schedule);
  }

  deleteTeam(id: number) {
    return this.http.delete(`http://localhost:8083/api/teams/${id}`);
  }


  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8083/api/teams/list');
  }

  editTeam(id: number, team: Team): Observable<Team> {
    return this.http.put<Team>(`http://localhost:8083/api/teams/${id}`, team);
  }

  addTeam(team: any): Observable<Team> {
    return this.http.post<Team>('http://localhost:8083/api/teams/save', team);
  }


  deleteHollyday(id: number) {
    return this.http.delete(`http://localhost:8083/api/hollyday/${id}`);
  }


  getHollyday(): Observable<Hollyday[]> {
    return this.http.get<Hollyday[]>('http://localhost:8083/api/hollyday/list');
  }

  editHollyday(id: number, hollyday: Hollyday): Observable<Hollyday> {
    return this.http.put<Hollyday>(`http://localhost:8083/api/hollyday/${id}`, hollyday);
  }

  addHollyday(hollyday: any): Observable<Hollyday> {
    return this.http.post<Hollyday>('http://localhost:8083/api/hollyday/save', hollyday);
  }


  deleteMember(id: number) {
    return this.http.delete(`http://localhost:8083/api/member/${id}`);
  }


  getMember(): Observable<Member[]> {
    return this.http.get<MemberDto[]>('http://localhost:8083/api/member/list');
  }

  editMember(id: number, member: Member): Observable<Member> {
    return this.http.put<Member>(`http://localhost:8083/api/member/${id}`, member);
  }

  addMember(member: any): Observable<Member> {
    return this.http.post<Member>('http://localhost:8083/api/member/save', member);
  }
}
