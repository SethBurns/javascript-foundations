
function createFavoriteFood(food) {
    var food = {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: 0
    }
    return food;
}

function commentOnSpiciness(dish) {
    if (dish.isSpicy === true) {
        return `Wow, this ${dish.name} is so spicy!`
    } else {
        return `Phew, this ${dish.name} is not very spicy.`
    }
}

function orderFood(dish) {
    dish.timesOrdered ++
    return dish
}

// search foods array for inner ingredients array and push
// all members of all ingredient arrays into list array

function createShoppingList(foods) {
    var list = []
    for (i = 0; i < foods.length; i++) {
        list = list.concat(foods[i].ingredients)
    }
    return list
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList,
};