function createItemStock(name, quantity, price) {
    var itemStock = {
        name: name,
        quantity: quantity,
        price: price,
    }
    if (name === undefined) {
        itemStock.name = 'unknown'
    }
    if (quantity === undefined) {
        itemStock.quantity = 0
    }
    if (price === undefined) {
        itemStock.price = 1.00
    }
    return itemStock
}

function makePurchase(item, money) {
    if (item.price > money) {
        return `Sorry, you need at least $${item.price} to make that purchase`
    } else if (!item.quantity) {
        return 'Sorry, there are none left'
    } else {
        return `Here are your ${item.name}`
    }
}

function collectChange(coins) {
    var value = 0
    for (i = 0; i < coins.length; i++) {
        value += coins[i]
    }
    return value
}

module.exports = {
    createItemStock,
    makePurchase,
    collectChange,
}
