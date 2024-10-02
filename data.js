
// [] ARRAY - LISTS
// {} OBJECTS - Key Properties'
// Map
// Set

  ****** DATA TYPES *****
// The name of your cat? String
// The age of your cat? Number
// Your cat's favorite things? [Array]
// Whether your cat can speak French? Boolean
// Whether your cat can solve a Rubik's cube? 
// Your cat? Object

// An object is also a data collection, but we can use objects to store data with greater specificity.
// In JavaScript, objects are what we use to represent key:value pairs.

// So what's a property? A property consists of a key:value pair, where the:

// key is a string (JS will coerce the type automatically), and the
// value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too).

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	make: "Audi"
}

for (const key in vehicle) {
	console.log(vehicle[key]);



    const vehicle = {
        color: "blue",
        hp: 4000,
        year: 1989,
        "active registration": true

----------------------------------------------------------------------------------------------------------------

        const vehicle = {
            color: "blue",
            year: 1989,
            make: "Audi",
            engine: {
                cylinders: 6,
                hp: 4000,
                size: 3.2
            }
        }
        
        console.log(vehicle.engine.size);
    }
    
    vehicle.color = "red"; // changing an existing property value
    vehicle.make = "Audi"; // adding a new key:value pair
    delete vehicle["active registration"]; // removing an existing property
    
    console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

// concat() 
// join() add together
// push()  add to end
// pop()  remove ONE from the end 
// shift() remove ONE from the fornt
// unshift() add to begining
// slice() to take info section out (0 start at #0 index up to #3 index - DO NOT INCLUDE #3)
// at() -2 start from end 
// splice(0, 3, "Bad Boys", "Jumunji") MODIFIES -  removing item from array (remove & replace) (0,3 - remove 0 -> 3)
// reverse()
// flat() flatten copy of array
// sort() sirts by first character STRINGS - alphabetical order - NO NUMBERS
// toSorted() copy of sorted array
// indexOf() -1 not in the index  --- start looking for first instance in index 
// lastIndexOf() last  looking for first instance in index 
// forEach() for-loop refactorDOES NOT INCREMENT 
// for ... of * can use break*
// map()
// flatMap()
// filter()
// find()
// findLast()
// findIndexOf()
// findLastIndex()
// every()
// some()
// reduce()
// reduceRight()
// (...movies) spread operator to copy 

// Array Methods with Callbacks
// The remainder of the previously-mentioned array methods all include relatively complex callback functions. We will be leaving these out of this lesson for the sake of keeping things contained, but we will revist them next lesson when we discuss functions, and you will have a lab activity that reinforces your understanding of array methods with callbacks.

// If you'd like to make a note for yourself, the most important methods to research after coming to an understanding with functions are:

map
filter
reduce
find
every
---------------------------------------------------------------------------------------------------------------




// So what's a property? A property consists of a key:value pair, where the:

// key is a string (JS will coerce the type automatically), and the
// value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too).






const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989
}
// Unlike arrays, objects use named keys rather than ordered indexes. Each piece of data is bound to its key, rather than assigned an index. The data is not sequential.

// A key is like an index in an array, but it has a name and it is unique. A value is what a key refers to, and can be any datatype.

// In JavaScript, an object is a way to group many pairs of keys and values together.

// We can access the values stored in each key using square bracket notation, as seen with arrays, or by using dot notation:

console.log(car["color"]);
console.log(car.hp);


// add to begining
movies.unshift("Interstellar")
console.log(movies)

// add to end
movies.push("TRading Places, Coming to America")
console.log(movies)




// remove ONE from the fornt
movies.shift()

// remove ONE from the end 
movies.pop()







const names = ["John", "Abagail", "Jerome", ..., "Cynthia"];
const greetings = [];

for (let i = 0; i < names.length; i++) {
	greetings[i] = "Hello, " + names[i] + "!";
	console.log(greetings[i]);
}






// Using a Class/Constructor Function (less common syntax)
let nums = new Array(2, 4, 18);
let nums = Array(2, 4, 18);

// Using Array Literal syntax (recommended best practice)
let nums = [2, 4, 18];










// Accessing Elements in an Array
// We access elements in an array using square bracket notation, passing in the "index" (position) of the element you want to access:

let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let firstMovie = movies[0];  // 'Caddyshack'
As we saw in our example above, arrays also have a length property that we can access with dot notation:

console.log(movies.length);






movies[1] = 'Batman';
movies[movies.length] = '';

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo']





movies[10] = 'Shrek';

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo', empty, empty, empty, empty, empty, empty, 'Shrek']




// We create a number of empty elements between the previous last element and the newly created one. What exactly is an empty element?

console.log(movies[4]); // undefined





movies.length = 50;

console.log(movies);




movies.length = 4;

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo']



for (let i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}



// concat() add together
// join()
// push()
// pop()
// shift()
// unshift()
// slice() 
// at()
// splice(0, 3, "Bad Boys", "Jumunji") removing item from array (remove & replace)
// reverse()
// flat()
// sort()
// indexOf()
// lastIndexOf()
// forEach()
// map()
// flatMap()
// filter()
// find()
// findLast()
// findIndexOf()
// findLastIndex()
// every()
// some()
// reduce()
// reduceRight()


let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

let ourMovies = yourMovies.concat(myMovies);

console.log(ourMovies); // ['Caddyshack', 'Interstellar', 'Scarface', 'Batman', 'The Count of Monte Cristo', 'Shrek']




let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

console.log(yourMoviesManyTimes); // ['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']