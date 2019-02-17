// 1

function findTypes() {
    let someArr = [];
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        someArr.push(type);
    }
    return someArr;
}
findTypes('number') // returns [“string”]
findTypes(null, 5, 'hello') // returns [“object”, “number”, “string”]

// 2

function executeForEach (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}    
executeForEach([1,2,3], function(el) { 
    console.log(el) 
}); // logs 1 2 3

// 3

function mapArray (arr, fn) {
	let someArray = [];
	executeForEach(arr, el => someArray.push(fn(el)));
    return someArray;
}
mapArray([2, 5, 8], function(el) { 
    return el + 3 
}); // returns [5, 8, 11]

// 4

function filterArray (arr, fn) {
	let freshArrey = [];
	executeForEach(arr, el => {
		if (fn(el)) {
            freshArrey.push(el);
        }
	});
    return freshArrey;
}
 filterArray([2, 5, 8], function(el) { 
     return el > 3 
    }); // returns [5, 8]

// 5

let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
      }    
];
    function getAmountOfAdultPeople(peopleArr) {
        return filterArray(peopleArr, (person) => person.age > 18).length;
    }
    getAmountOfAdultPeople(data);// returns 3

// 6

function getGreenAdultBananaLovers(peopleArr) {
    const loversBananaArr = filterArray(peopleArr, (person) => {
        return person.age > 18 && person.favoriteFruit === 'banana' && person.eyeColor === 'green'
    });
    return mapArray(loversBananaArr, (lover) => lover.name);
}
getGreenAdultBananaLovers(data);// returns [‘George]


// 7

function keys (object) {
    let freshArrey = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            freshArrey.push(key);
        }
    }
    return freshArrey;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

// 8

function values (object) {
    let freshArrey = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            freshArrey.push(object[key]);
        }
    }
    return freshArrey;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]

// 9

function showFormattedDate (date) {
    date = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthIndex = months[date.getMonth()];
    return 'Date: ' + date.getDate() + ' of ' + monthIndex + ', ' + date.getFullYear();
}
showFormattedDate(new Date('2019-01-27T01:10:00')) // returns ‘Date: 27 of Jan, 2019’

// 10

function isEvenYear(date) {
    var year = date.getFullYear();
    return year % 2 === 0;   
}
isEvenYear(new Date('2019-01-27T01:10:00')) // false

// 11

function isEvenMonth(date) {
    var month = date.getMonth() + 1;
    return month % 2 === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00')) // true


