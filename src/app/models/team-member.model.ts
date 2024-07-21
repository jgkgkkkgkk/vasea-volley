export class TeamMember {
  id: number;
  teamId:number;
  firstName: string;
  lastName: string;
  age:number|null;
  height:number|null;

  constructor(lessons: TeamMember) {
    this.id = lessons.id;
    this.firstName = lessons.firstName;
    this.lastName = lessons.lastName;
    this.age = lessons.age;
    this.height = lessons.height;
    this.teamId=lessons.teamId;

  }
}
