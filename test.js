const http = require('http');

let animals = ['Lion', 'Tigger', 'Cow', 'Camel'];

let list = animals.filter(function (animal) {
    return animal !== 'Cow';
});

console.log('Filters: ' + list);