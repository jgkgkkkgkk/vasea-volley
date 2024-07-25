export class Schedule {
  id: number;
  day: string;
  time: string;
  teacher: string;

  constructor(schedule: Schedule) {
    this.id = schedule.id;
    this.day = schedule.day;
    this.time = schedule.time;
    this.teacher = schedule.teacher;
  }
}
