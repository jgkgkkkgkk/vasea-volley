export class Team {
  id: number;
  name: string;
  age: string;

  constructor(lessons: Team) {
    this.id = lessons.id;
    this.name=lessons.name;
    this.age = lessons.age;

  }
}
