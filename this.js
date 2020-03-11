function sayHi() {
  console.log('HI');
  // this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    // this is window
  }
}

// this current execution scope

// ---------------

const printBio = person.printBio;
// this is window