
function createHobbit(name, age) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: age > 32,
    isOld: age > 100,
    acquaintances: [],
  }
  if (age === undefined) {
    hobbit.age = 0;
  }
  if (name === undefined) {
    hobbit.name = 'unknown';
  }
  
  return hobbit;
}

function celebrateBirthday(hobbit) {
  hobbit.age ++;
  hobbit.isAdult = hobbit.age > 32;
  hobbit.isOld = hobbit.age > 100
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return `Here is the ring!`
  } else {
    return `You can't have it!`
  }
}
function meetPeople(hobbit, people) {
  for (i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
}

// search hobbit.acquaintances[i].relationship for enemy or friend
function findFriends(hobbit) {
  var friends = [];
  for (i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name)
    }
  }
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}