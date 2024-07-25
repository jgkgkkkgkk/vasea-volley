export class Hollyday {
  id: number;
  name: string;
  description: string;
  startDate: Date;

  constructor(hollyday: Hollyday) {
    this.id = hollyday.id;
    this.name = hollyday.name;
    this.description = hollyday.description;
    this.startDate = hollyday.startDate;

  }
}
