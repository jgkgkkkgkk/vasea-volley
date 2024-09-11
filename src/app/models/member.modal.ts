

export class Member {
  id: number;
  firstname: string;
  lastname: string;
  height:number
  age: string;
  email:string;
  teamId:number;

  constructor(member: Member) {
    this.id = member.id;
    this.firstname = member.firstname;
    this.lastname = member.lastname;
    this.age = member.age;
    this.height = member.height;
    this.email=member.email;
    this.teamId=member.teamId;
  }
}
