export class Ager {
  constructor(age, homeland, assignedSex, motivation, lifeExpect) {
    this.age = age;
    this.homeland = homeland;
    this.assignedSex = assignedSex;
    this.motivation = motivation;
    this.lifeExpect = lifeExpect;
    this.yearsToLive = 0;
  }

  timeLeft() {
    this.yearsToLive = this.lifeExpect - this.age;
    if (this.yearsToLive < 0) {
      return `You have already lived ${this.age - this.lifeExpect} years longer than expected. Good job.`
    }
    return this.yearsToLive;
  }

  mercuryTimeLeft() {
    this.yearsToLive = Math.round((this.lifeExpect - this.age) * 0.24);
    return `About ${this.yearsToLive} Mercurian years`;
  }
}