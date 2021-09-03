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


  // The other way...

  // export class Ager {
  //   constructor(age, homeland, assignedSex, motivation) {
  //     this.age = age;
  //     this.homeland = homeland;
  //     this.assignedSex = assignedSex;
  //     this.motivation = motivation;
  //     this.lifeExpect = 0;
  //   }
  // baseLifeExpect() {
  //   let modifier = 0;
  //   if (this.assignedSex === "Female" && this.homeland === "North America") {
  //     modifier += 81;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Female" && this.homeland === "Oceania") {
  //     modifier += 81;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Female" && this.homeland === "Europe") {
  //     modifier += 82;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Female" && this.homeland === "Latin America") {
  //     modifier += 79;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Female" && this.homeland === "Asia") {
  //     modifier += 75;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Female" && this.homeland === "Africa") {
  //     modifier += 65;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Male" && this.homeland === "North America") {
  //     modifier += 77;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Male" && this.homeland === "Oceania") {
  //     modifier += 77;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Male" && this.homeland === "Europe") {
  //     modifier += 75;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Male" && this.homeland === "Latin America") {
  //     modifier += 72;
  //     this.lifeExpect += modifier;
  //   } else if (this.assignedSex === "Male" && this.homeland === "Asia") {
  //     modifier += 71;
  //     this.lifeExpect += modifier;
  //   } else {
  //     modifier += 62;
  //   }
  //   return this.lifeExpect;
  // }
}