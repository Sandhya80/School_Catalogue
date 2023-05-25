//parent class
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if(typeof newNumberOfStudents !== 'number') {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = newNumberOfStudents;
  }
}
//methods:
quickFacts() {
  console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
 }
 //A Static Method:
 static pickSubstituteTeacher() {
   const substituteTeachers = [''];
   const randomIndex = Math.floor(substituteTeachers.length * Math.random());
   return substituteTeachers[randomIndex];
 }
}
//Primary class:
class PrimarySchool extends School {
  constructor(name, numberOfStudents,pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = 'pickupPoilcy';  
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
//HighSchool class:
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
//Instances of PrimarySchool and HighSchool:
const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
//calling .quickFacts() on lorraineHansbury:
lorraineHansbury.quickFacts();
//calling .pickSubstituteTeacher() on School:
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
//Creating a HighSchool instance with 3 properties:
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
//saving the instance to a variable named alSmith: 
alSmith.sportsTeam;