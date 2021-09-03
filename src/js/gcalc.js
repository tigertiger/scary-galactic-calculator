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
    if (this.yearsToLive < 0) {
      return `You have already lived about ${Math.round((this.age - this.lifeExpect) * 0.24)} Mercurian years longer than expected. Good job.`
    }
    return `About ${this.yearsToLive} Mercurian years`;
  }

  venusTimeLeft() {
    this.yearsToLive = Math.round((this.lifeExpect - this.age) * 0.62);
    if (this.yearsToLive < 0) {
      return `You have already lived about ${Math.round((this.age - this.lifeExpect) * 0.62)} Venutian years longer than expected. Good job.`
    }
    return `About ${this.yearsToLive} Venutian years`;
  }

  marsTimeLeft() {
    this.yearsToLive = Math.round((this.lifeExpect - this.age) * 1.88);
    return `About ${this.yearsToLive} Martian years`;
  }
}
