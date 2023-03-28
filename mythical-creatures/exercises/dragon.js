function createDragon(name, riderName, temperment) {
  dragon = {}
    dragon.name = name
    dragon.rider = riderName
    dragon.temperment = temperment
    dragon.timesEaten = 0
    dragon.hungry = true

  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  dragon.timesEaten++
  if (dragon.timesEaten === 3) {
    dragon.hungry = false
  }
  return dragon
}

function findFireBreathers(dragons) {
  return dragons.filter(function(dragon) {
    return dragon.temperment === 'aggressive'
  })
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}