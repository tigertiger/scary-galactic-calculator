export class Ager {
  constructor(age, homeland, assignedSex, motivation, lifeExpect) {
    this.age = age;
    this.homeland = homeland;
    this.assignedSex = assignedSex;
    this.motivation = motivation;
    this.lifeExpect = lifeExpect;
  }

  timeLeft() {
    let modifiers = 0;
    this.lifeExpect = this.age += modifiers;
    if (this.assignedSex === "Male") {
      modifiers += 62;
    } else if (this.assignedSex === "Female") {
      modifiers += 65;
    }
    return this.lifeExpect;
  }
}