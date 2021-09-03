export class Ager {
  constructor(age, homeland, assignedSex, motivation) {
    this.age = age;
    this.homeland = homeland;
    this.assignedSex = assignedSex;
    this.motivation = motivation;
    this.lifeExpect = 0;
  }

  baseLifeExpect() {
    let modifier = 0;
    if (this.assignedSex === "Female") {
      modifier += 65;
      this.lifeExpect += modifier;
    } else {
      modifier += 62;
      this.lifeExpect += modifier;
    }
    return this.lifeExpect;
  }
}