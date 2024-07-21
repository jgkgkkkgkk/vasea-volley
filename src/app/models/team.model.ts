export class Team {
  id: number;
  name: string;
  ages: string;

  constructor(lessons: Team) {
    this.id = lessons.id;
    this.name=lessons.name;
    this.ages = lessons.ages;

  }
}
