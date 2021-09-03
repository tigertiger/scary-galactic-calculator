export class Ager {
  constructor(age, homeland, assignedSex, motivation, lifeExpect) {
    this.age = age;
    this.homeland = homeland;
    this.assignedSex = assignedSex;
    this.motivation = motivation;
    this.lifeExpect = lifeExpect;
  }

  timeLeft() {
    let yearsToLive = this.lifeExpect - this.age;
    if (yearsToLive < 0) {
      return `You have already lived ${this.age - this.lifeExpect} years longer than expected. Good job.`
    }
    return yearsToLive;
  }

  mercuryTimeLeft() {

  }
}