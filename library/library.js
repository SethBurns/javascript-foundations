function issueCard(name, age) {
    var card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0,
        isChild: age < 12
    }
    return card;
}

function searchByAuthor(collection, author) {
    var authorCatalog = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].author === author) {
            authorCatalog.push(collection[i]);
        }
    }
    if (authorCatalog.length > 0) {
        return authorCatalog;
    } else {
        return 'No book found for search criteria';
    }
}

module.exports = {
    issueCard,
    searchByAuthor
};