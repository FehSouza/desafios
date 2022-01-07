class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.name = {
      firstName: firstName,
      lastName: lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  bio(){
    return console.log(
      `${this.name.firstName} ${this.name.lastName} tem ${this.age} anos de idade. Ele gosta de ${this.interests}.`
    );
  };

  greeting(){
    console.log(`Oi! Meu nome é ${this.name.firstName}.`);
  };
}

const person1 = new Person("Fernanda", "Souza", 25, "Feminino", [
  "música",
  "livros",
]);

person1.bio();
