React Developer Curriculum
All Lessons
> 308H.4 - Data Collections
308H.4 - Data Collections
Learning Objectives
By the end of this lesson, learners should be able to:

Explain the difference between arrays and objects.
Access and iterate through array elements.
Add or remove elements from an array.
Store key-value pairs inside an object.
Access values by key-name.
Add Object Properties.
Change Object Properties.
Explain why we use an object instead of an array.
Manipulate objects and arrays declared as const.
List common errors made with objects.
Use object properties with conditionals.

Lesson Setup
For this lesson, we're going to code along using a Vanilla CodeSandbox - you can name it "JavaScript Objects Practice".`


 CodeSandbox
This lesson uses CodeSandbox as one of its tools.

If you are unfamiliar with CodeSandbox, or need a refresher, please visit our reference page on CodeSandbox for instructions on:

Creating an Account
Making a Sandbox
Navigating your Sandbox
Submitting a link to your Sandbox to Canvas

Data Collections
Keeping code organized is one of the most important aspects of being a successful developer. JavaScript and other programming languages give us many tools to do so, including data collections.

Data collections are exactly what they sound like. A data collection allows you to organize many different pieces of data into a single variable (location in memory). These collections can then be passed around, iterated, accessed, and manipulated as a single entity.

To demonstrate why this might be useful, consider the following problem:

Store the name of every person in class to variables (that's already a lot of variables).
Add the string "Hello, " to the beginning of each name, and the punctuation "!" to the end; store this in a separate variable.
Log each of these new strings to the console.
What might this look like?

let name1 = "John";
let name2 = "Abagail";
let name3 = "Jerome";
// ... many names later...
let name30 = "Cynthia";

let greeting1 = "Hello, " + name1 + "!";
// ... many greetings later...
let greeting30 = "Hello, " + name30 + "!";

console.log(greeting1);
// ...
Obviously, this is not the best way to go about this.

As you're already familiar with loops, you can see how one would be useful in this case. But hot would we implement it? We can't loop through a number of separate variables easily, can we?

We can, if we collect them.

Let's look at how this might be accomplished using an array, which is a type of data collection that we will discuss in detail shortly. For now, just appreciate how much cleaner this code is!

const names = ["John", "Abagail", "Jerome", ..., "Cynthia"];
const greetings = [];

for (let i = 0; i < names.length; i++) {
	greetings[i] = "Hello, " + names[i] + "!";
	console.log(greetings[i]);
}
Above, you can see that we're accessing each name with the name's index in the array. Data collections come in two different forms: indexed collections and keyed collections.

Indexed collections organize their contents in a specified order, with a sequential numerical index for each element in the collection.
Keyed collections organize their contents with descriptive keys that are linked to values in key:value pairs.
In JavaScript, arrays are indexed collections and objects are keyed collections.

We will discuss all of these collections in detail, beginning with arrays.


The Use Case of Arrays
What are Arrays?

Technically, arrays in JS are objects, which we will go over in more detail later.
Arrays are "list-like" objects with keys of "0", "1", etc.
They contain zero or more items called "elements" (not to be confused with HTML elements).
Each element in an array can hold any data type, including objects, functions, even other arrays.
Unlike objects, their items are considered to be ordered.
It is a best practice to name array variables plurally, e.g. let colors = ['red', 'green', 'blue'];.
Why use Arrays?

Arrays are the data structure of choice for holding lists of data.
Without complex data types such as arrays or objects, we'd have to store every individual piece of data in separate variables, resulting is lots of messy code.

Creating Arrays
There are three ways to create an array:

// Using a Class/Constructor Function (less common syntax)
let nums = new Array(2, 4, 18);
let nums = Array(2, 4, 18);

// Using Array Literal syntax (recommended best practice)
let nums = [2, 4, 18];
The best practice is to use the Array Literal syntax because it's more concise, and the Class approach behaves differently if you pass only one argument. We'll discuss Classes in more detail during later lessons.

Exercise
Create an array consisting of three of your favorite movies (strings) and assign it to a variable named movies.

Accessing Elements in an Array
We access elements in an array using square bracket notation, passing in the "index" (position) of the element you want to access:

let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let firstMovie = movies[0];  // 'Caddyshack'
As we saw in our example above, arrays also have a length property that we can access with dot notation:

console.log(movies.length);
The length property tells us the number of elements in the array, and can be used to facilitate things like for loops.

Aside: Strings as Collections of Data
Don't strings also have a length property? We can also access individual string characters with square bracket notation...

You'll notice that arrays and strings behave very similarly. This is because strings are actually data collections! A string is simply an ordered collection of individual characters; as such, strings have many properties and methods (more on these later) that mimic those available to arrays and objects.

Didn't we also say that strings were primitive data types, though? What's the deal?

Yes. When a property or method is accessed on a primitive string, JavaScript automatically wraps that string in the String object and calls the property or method from the object. Convenient!


Populating an Array by Index
You can also assign values to specific indexes within an array using square-bracket notation. If an element already exists at that index, it will be overwritten. Using this alongside the length property allows us to add an item to the end of the array.

movies[1] = 'Batman';
movies[movies.length] = '';

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo']
What happens if we add something to the array far beyond its current length?

movies[10] = 'Shrek';

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo', empty, empty, empty, empty, empty, empty, 'Shrek']
We create a number of empty elements between the previous last element and the newly created one. What exactly is an empty element?

console.log(movies[4]); // undefined
As we can see, empty elements behave as undefined values (in some cases!). An array with empty values is called a "Sparse Array." While attempting to directly access these values results in undefined, in some cases empty slots are skipped. We'll touch more on this later.


Manipulating Array Length
Now that we understand that empty elements can exist, what happens when we attempt to assign a value to the array's length property?

movies.length = 50;

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo', empty x 6, 'Shrek', empty x 39]
Setting the length to 50 added 39 empty elements to the end of the array!

In this way, we can also shorten the array, which will truncate the array and permanently remove the elements that exist beyond the new length.

movies.length = 4;

console.log(movies); // ['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo']

Array Iteration
We've shown a couple of examples of iterating over an array's elements using a for loop already, but it is an important concept to understand. Now that we are more familiar with the details of array syntax and behavior, let's look at another example:

for (let i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}
Let's break this down:

Within our for loop, we initialize our starting index i to be 0, since arrays start at 0 -- not 1!
We progress the loop until we have reached the final index, which is 1 less than the length of the array, movies.length.

What happens if we attempt to go to i <= movies.length?
We log each element by accessing it at its index using square bracket notation.

Array Methods
Arrays and objects provide helpful snippets of code that allow us to perform common and repetitive tasks without needing to write many lines of code over and over again. These helpers are called methods, and they are a type of function -- a block of code that is given a name so that it can be reused. We will talk about the creation of functions in the next lesson.

Methods allow us to pass values into them in order to customize these common tasks. Array methods include:

concat()
join()
push()
pop()
shift()
unshift()
slice()
at()
splice()
reverse()
flat()
sort()
indexOf()
lastIndexOf()
forEach()
map()
flatMap()
filter()
find()
findLast()
findIndexOf()
findLastIndex()
every()
some()
reduce()
reduceRight()
That's a lot of methods! We will cover the more commonly used methods in detail, and briefly touch on the less common or more complex methods which you will be unlikely to use in the near future.


concat() - Joining Arrays Together
The concat() method allows us to quickly join two or more arrays together into a single array:

let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

let ourMovies = yourMovies.concat(myMovies);

console.log(ourMovies); // ['Caddyshack', 'Interstellar', 'Scarface', 'Batman', 'The Count of Monte Cristo', 'Shrek']
You can also use this to repeat arrays by passing them into the concat method multiple times:

let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

console.log(yourMoviesManyTimes); // ['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']
Or to copy an array by not passing any values into concat:

let yourMoviesCopy = yourMovies.concat();

console.log(yourMoviesCopy); // ['Caddyshack', 'Interstellar', 'Scarface']
But why would this be useful? Can't we just do something like this?

let yourMoviesCopy = yourMovies;
For now, yes. In a future lesson, we'll discuss the concepts Pass by Value and Pass by Reference, and you will see why making distinct copies of arrays and objects can be useful.


join() - Turning Arrays into Strings
The join() method allows us to turn all of the elements of an array into a single string. The join() method accepts a delimiter that will be used to join the array elements together:

let movieString = myMovies.join(" and ");

console.log(movieString + " all walk into a bar..."); // Batman and The Count of Monte Cristo and Shrek all walk into a bar...

push() and unshift() - Adding Elements to an Array
We can add elements to the end of an array using the push() method, which accepts any number of elements to be added (making it superior to manually using array[array.length] = newVal repeatedly):

movies.push('Trading Places', 'Antitrust');
We can also add to the front of an array with unshift():

movies.unshift('Star Wars');

pop() and shift() - Removing Elements from an Array
We can remove a single element from the end of an array using the pop() method, which can then be assigned to a variable:

let lastMovie = movies.pop();
We can also remove from the front of an array with shift:

let movie = movies.shift();
pop and shift only remove one element at a time and don't take any arguments. They return the removed element so that you can store it in a variable, as shown above, and they modify the array in place, which means the original array - movies in this case - has changed.


Remembering unshift & shift
push & pop are easy to remember, but unshift & shift are not so clear.

Maybe this will help you remember which does what:

The "longer" named methods add to an array (elongate).
unshift -> [...] <- push

The "shorter" named ones remove from the array (shorten).
shift <- [...] -> pop

splice() - Add/Remove Elements to/from Anywhere in the Array
The Array.prototype.splice method is capable of adding and/or removing any number of elements to/from an array with a single line of code!

splice has a syntax of: array.splice(start, deleteCount, newItem1, newItem2...)

Examples of adding/removing elements with splice:

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// removedMovies => ['Trading Places']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']

removedMovies = movies.splice(0, 3);
// This starts at element 0 and removes 3 elements.
// removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// movies => ['Spaceballs', 'Alien']

removedMovies = movies.splice(1, 0, 'The Sting');
// This starts at element 1 and does not remove anything, but adds The Sting.
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']
The splice method always returns an array containing the removed elements.

As you can see, splice is incredibly powerful for array manipulation; as such, it is one of the most commonly used tools.


slice() - Extract a Section of an Array
Splice's unfortunately-named cousin, slice(), extracts a section from an array and returns a new array. It takes a starting index and ending index, and returns all elements between those two indexes (end not included). Unlike splice, slice does not modify the original array at all.

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let middleMovies = movies.slice(1,3);
// middleMovies => ['Interstellar', 'Scarface']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']
While it is easy to get confused between splice and slice, try to come up with a method to differentiate between the two. For example, splice has an extra letter, "p." The additional letter can be used to remind you that splice can add to an array, which changes the original array. Therefore, slice does neither of these things.


at() - Access Elements using Relative Indexes
The at() method very simply accesses elements at the given position in the array:

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let myMovie = movies.at(2); // 'Scarface'
What makes the at() method useful is its ability to count backwards from the end of the array using a negative index, where -1 is the last element in the array:

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let myMovie = movies.at(-2); // 'Scarface'

reverse() - Transpose an Array
The reverse() method transposes the elements of an array, in place.

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

movies.reverse(); // ['Trading Places', 'Scarface', 'Interstellar', 'Caddyshack']

flat() - Flatten Nested Arrays
In order to discuss flat(), we need to touch on nested arrays.

Arrays can store any data type as elements, including other arrays. We call these nested or "multi-dimensional" arrays.

Take the following two-dimensional array as an example:

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
In order to access the elements within the inner arrays, we simply add additional square bracket notations to our syntax:

numArray[0][0] contains the value 1.
numArray[1][2] contains the value 6.
Where is the value 7 located?
This process would continue if we added a third dimension to the array:

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];
Now, we can access 11 at numArray[2][1][1].

If this process seems confusing, that's because it can be. Imagine a ten-dimensional array with dozens of values per layer... While the practical use cases of a data structure like that are extremely limited, they can exist.

The flat() method gives us the option to turn multi-dimensional arrays into less multi-dimensional arrays. The flat() method accepts a number which is the depth at which it will flatten the array (default 1). This number is effectively an indicator of how many dimensions you want reduced from the array.

Let's use our three-dimensional example:

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];

let twoD = numArray.flat();
/** 
 * twoD = [
 * 	1, 2, 3, 4, 5, 6,
 * 	[7, 8, 9],
 * 	[10, 11, 12],
 * 	[13, 14, 15]
 * ]
 */ 
As you can see, calling flat() removed one layer of depth from our array structure. What if we wanted to remove two layers, turning our three-dimensional array into a one-dimensional array?

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];

let oneD = numArray.flat(2);
// oneD = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] 
Be cautious in your usage of flat(), as most of the time multi-dimensional data structures are built that way for a reason. Luckily, flat() returns a copy of the original array, meaning your nested, multi-dimensional structure is still there if and when you need it!


sort() - Sort an Array
The sort() method sorts an array in place. By default, sort() compares the numerical values of elements and sorts them in ascending order. In the case of strings, this means comparing their UTF-16 code units values. This roughly translates to alphabetical order. Other data types undergo a data conversion to strings before sorting in this same manner, if possible.

You can also define a custom sort by using what is known as a callback function. Callback functions are beyond the scope of this lesson, but as you move into the lesson on functions, just remember that you can pass an entire function into the sort() method (and many other methods) to change its behavior.

let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']
To get a sorted copy of the array without modifying the original array, you can use the toSorted() method in the same way.


indexOf() and lastIndexOf() - Search an Array
The indexOf() method looks for the value passed into it, and returns the index of the first element that matches that value, if any. If the value is not present, it returns -1.

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

let batmanIndex = movies.indexOf('Batman'); // 2
Now, there is no rule against duplicate values in arrays, so what if I wanted to find the last occurence of "Batman" in the array below? Thankfully, lastIndexOf() does the exact same thing, but starts at the end of the array.

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Batman', 'Spaceballs', 'Alien', 'Batman', 'The Count of Monte Cristo'];

let batmanIndex = movies.lastIndexOf('Batman'); // 8

forEach() - Iterate Over All of the Elements in an Array
Although a for loop can be used to iterate over an array, if you know you want to iterate over all of the elements in an array, the forEach() method is a better approach. forEach() is another method that accepts a callback function, like sort(). Without getting too deep into functions, let's look at how forEach() works:

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

movies.forEach((movie) => {
	console.log(movie);
});
Try it out. As you can see, the forEach method calls the function provided as an argument once for each element in the array.

You can also access the index within each iteration:

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

movies.forEach((movie, i) => {
	console.log(i + ') ' + movie);
});
This provides a very convenient way to loop through arrays.

Note that it is good practice to name the parameter that accepts each element as the singular of the array, or simply the first letter of the array variable (movie or m for the example above).

As previously mentioned, we also have the for...of loop for iterating over the elements of arrays and other iterables such as strings:

for (let movie of movies) {
	if (movie === 'The Last Airbender') break;
	console.log(movie);
}
Unlike forEach, the for...of loop can be exited using the break statement.


Array Methods with Callbacks
The remainder of the previously-mentioned array methods all include relatively complex callback functions. We will be leaving these out of this lesson for the sake of keeping things contained, but we will revist them next lesson when we discuss functions, and you will have a lab activity that reinforces your understanding of array methods with callbacks.

If you'd like to make a note for yourself, the most important methods to research after coming to an understanding with functions are:

map
filter
reduce
find
every

The Spread Operator
ES2015 gave us a cool new way to copy an entire array using the ... (spread operator).

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let moviesCopy = [...movies];
The elements are being "spread" within the array literal.

Here's how you can copy and insert additional elements simultaneously using the spread operator:

let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let moreMovies = ['Interstellar', ...movies, 'Contact'];
You will see the spread operator used often in modern codebases that handle arrays frequently.


Knowledge Check
❓ In your own words, what's an array?

❓ What will be the value of the variable color:

const colors = ['red', 'green', 'blue'];
let color = colors[1];
❓ What's the best method to use to iterate through an entire array?

❓ What method is used to copy a number of elements into a new array?


Further Learning
Because arrays are such a useful data structure, it's beneficial to developers to know what methods are available and what they do.

You can research Array methods and more in the MDN reference on JavaScript Arrays.


JavaScript Objects
Very simply, objects are a keyed collection of zero or more properties.

So what's a property? A property consists of a key:value pair, where the:

key is a string (JS will coerce the type automatically), and the
value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too).
In computer science, collections of key:value pairs are commonly referred to as dictionaries - a good visualization of what an object is. You look something up with the key, and then read its value or "definition."

Objects are the most common data structure in Object Oriented Programming (OOP). Core OOP concepts go beyond the scope of this introductory lesson, but we will cover them in detail when we discuss Classes, which are essentially templates for creating objects quickly.

In Object-Oriented Programming (OOP), we often model the goal of our application using real-world objects. We use objects in our code to describe nouns like we use arrays to be lists of nouns (and functions to describe verbs).


Arrays and Objects
Arrays are indexed data collections used to store data in sequential lists:

const vehicle = ["blue", 4000, 1989];
Each element has a corresponding index (or place), in sequence.

But with the array above, we don't know what the values mean. Does "blue" refer to the color of the vehicle? To the mood of the owner? Is it the model of the vehicle?

An object is also a data collection, but we can use objects to store data with greater specificity.
In JavaScript, objects are what we use to represent key:value pairs.

Object Syntax
While arrays are declared using square brackets const arr = [];, objects are declared using curly braces const obj = {};.

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989
}
Unlike arrays, objects use named keys rather than ordered indexes. Each piece of data is bound to its key, rather than assigned an index. The data is not sequential.

A key is like an index in an array, but it has a name and it is unique. A value is what a key refers to, and can be any datatype.

In JavaScript, an object is a way to group many pairs of keys and values together.

We can access the values stored in each key using square bracket notation, as seen with arrays, or by using dot notation:

console.log(car["color"]);
console.log(car.hp);
An object property name can be any JavaScript string or symbol, including an empty string. However, you cannot use dot notation to access a property whose name is not a valid JavaScript identifier. For example, a property name that has a space or a hyphen, that starts with a number, or that is held inside a variable can only be accessed using the bracket notation.

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
}

console.log(vehicle["active registration"]); // true

Unique Keys
It just makes sense that keys ought to be unique within an object. Values, however, can be whatever you'd like.

An object can not have more than one key with the same name. If it does, the value will default to the last key with the same name, and the prior properties will be excluded on creation.

const borough = {
	name: "Brooklyn",
	name: "The Bronx"
}

console.log(borough); // { name: "The Bronx" }

Changing Object Properties and Values
You can assign new keys and values to an object after it has been created, or overwrite the values of existing keys.

The delete keyword can also be used to remove properties.

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
}

vehicle.color = "red"; // changing an existing property value
vehicle.make = "Audi"; // adding a new key:value pair
delete vehicle["active registration"]; // removing an existing property

console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

Iterating through Objects
We can iterate through objects very similarly to arrays using the for...in loop.

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	make: "Audi"
}

for (const key in vehicle) {
	console.log(vehicle[key]);
}
Note that we must use square bracket notation to access the vehicle properties using key, because key is a variable, not a literal. Trying to use vehicle.key would attempt to access a property named key, which does not exist within our vehicle object.


Object Methods
Objects can be much more complex than arrays, especially when nested with other objects:

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
So wouldn't it be nice if we had a bunch of methods to use on objects that made our lives easier? Absolutely. However, objects come in infinite different types and configurations, unlike arrays which are always sequential, ordered lists. Since objects are relatively unpredictable, there are very few methods available to all objects. Instead, each type of object defines its own methods.

You will learn more about different types of pre-defined objects as you continue learning, and will also learn how to create your own object methods. For now, just know that they exist.


Comparing Data Collections
Take a look at the following code:

let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log(myMovies == yourMovies); // false
That's weird; they look the same to me. What about objects?

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle2 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1 == vehicle2); // false
Also false.

In JavaScript, objects (including arrays) are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.


When to use Objects or Arrays
When designing your programs, it is up to you to choose how to model your data. We can represent real-life things with our datatypes, but it's a matter of choosing the appropriate datatypes.

If the thing you want to model is just a list, use an array.
If the thing want to model has properties, use an object.
For more simple things use Strings, Numbers, Booleans and other simple datatypes.
Using what we know about datatypes so far, which datatype would we use to model:

The name of your cat?
The age of your cat?
Your cat's favorite things?
Whether your cat can speak French?
Whether your cat can solve a Rubik's cube?
Your cat?

Manipulating Objects and Arrays Declared as const
const only prevents you from reassigning a variable, it doesn't prevent you from adding or changing elements of arrays or properties of objects.

You can do this:

const mogwai  = {};

mogwai.name = 'Gizmo';
You cannot do this:

const mogwai = {};

mogwai = { name: 'Gizmo' };

Object Properties and Conditionals
You can use object properties with conditionals, loops, etc.

const obj = {
	salutation: 'hi',
	count: 4
}

if (obj.salutation === "hi") {
	console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
	console.log(i);
}
You can also test to see if a property exists on an object:

const obj = {
	something: 'wuttt'
}

if (obj.something) {
	console.log('ok');
}

if (obj.anotherthing){
	console.log('ok');
} else {
	console.log("that property doesn't exist");
}
This is because accessing a property that doesn't exist on an object gives you undefined, which is treated as false.


Other Keyed Collections
There are other types of objects that can be used as keyed collections and behave slightly differently from traditional objects, such as Map and Set objects. These topics are best explored after you have a strong foundation with Classes and Object-Oriented Programming concepts, but here is a link to the MDN reference on keyed collections for your convenience.

As with all topics in programming no matter your stage of learning, feel free to do further research, but don't confuse yourself!


Copyright © Per Scholas 2024

