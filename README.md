#Javascript

1. Function `Invocation patterns`
+ Four ways of invoking functions
	- Functions
	- Methods
	- Constructors
	- Call & Apply methods
+ First two are most common
+ Receive arguments & this
+ Invoking stops current execution
+ plus(a,b)
+ Traditional invocation
+ `this` parameter bound to global object.

2. Function `Using funtions as objects`
+ What's an object?
	- Variables `var a = 2;`
	- Lists `var myList = ('hi', true, 3);`
	- Objects are flexible.

3. Function `Invoking functions as methods`
+ The `this` argument points to the object
+ Invoke the function using dot notation
+ The binding of `this` happens at invocation time.

4. Function `Invoking through the constructor`
+ `new` creates a new instance of the object
+ Each new instance has it's own set of properties
+ `this` argument points to the instance of the object
Example: 
```javascript
	var Dog = function() {
		var name';
		console.dir(this); // Return object instace `new`
	}

	firstDog = new Dog;
	firstDog.name = 'Miss';
	
	secondDog = new Dog;
	secondDog.name = 'Big';

	console.log(firstDog);
	console.dir(firstDog);
	
```
+ Constructor names are capitalized

5. Expanding objects through prototype
+ Prototypal Inheritance
	- Multiple objects can inherit
	- All objects inherit properties
	- Declarations inherit from `Function`
	- `Function` constructor inherits from `Object`
Example:

```javascript
	var speak = function(sayWhat) {
	console.log(sayWhat);
}

var Dog = function() {
	var name;
}

Dog.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Miss";
```
+ Every object can be based on another
+ `prototype` object gives you access

6. Invoking through Call & Apply
+ Indirect invocation
+ Define the value of `this` argument
+ Control: `this` and `arguments`
+ `Call` passes a value, Apply an array
Example:
```javascript
var speak = function(what) {
	console.log(this.love); // Result: `Purr`
}

var saySomething = {normal: 'Miss', love: 'Purr'}
speak.call(saySomething, 'sayHello');
// speak.apply(saySomething, ['sayHello']);

speak('miss');
```

7. The arguments parameter
+ List of elements passed
+ An array like object
+ Numerical index `arguments[x]`
+ We can get the `arguments.length`
+ We can loop through arguments
+ Can't use all array methods

8. The return statement
+ Returns an expression
+ Sort of optional
+ Only in function body
+ Return sends something back to the caller
+ Stops execution of the function
+ You can have more than one
+ Can be anything or nothing
+ Careful with auto semicolon insertion

9. Challenge: Social Media Navigation
+ Create a self-executing function
+ Locates one or more DOM elements
+ Replaces DOM elements

Example:
```javascript
var socialMedia = {
	facebook: 'http://facebook.com',
	twitter: 'http://twitter.com',
	youtube: 'http://youtube.com'
};

var social = function() {
	var output = '<ul>',
	myList = document.querySelectorAll('.socialmediaicons');
	for (var key in arguments[0]) {
		output += '<li><a href="' + socialMedia[key] + '">' + 
		'<img src= "images/' + key +'.png" alt="icon for ' + key +'"></a></li>';
	}
	output += '</ul>';
	for (var i = myList.length - 1; i >=0; i--) {
		myList[i].innerHTML = output;
	}; 
}(socialMedia);

```

10. Variable Scope and Hoisting
+ Scope: life and death of a variable
+ Block scope: variables live within {}
+ Function scope: variables live in functions
+ The `scope chain`
+ Dangerous `global` variables

```javascript
	var dogName = 'Miss'; // Local variables
	dogName = 'Meow'; // Global variables
```
+ Variable definitions are `hoisted`

11. Creating and namespacing modules
+ `Modules` let you reuse code across apps
+ `Namespacing` protects variables
+ `Return` statement communicates back

Example:
`script.js`
```javascript
var ray = (function() {
	var DEFAULTS = {
		say: 'hello'
}
	return {
		speak: function() {
		var myArguments = arguments[0] || '';
		var statement = myArguments.say || DEFAULTS.say;
		console.log(statement);
		//return this; 
	}
}
})();
```
`index.html`
```html
	ray.speak(); // Return `hello`
	ray.speak({say: 'Hello 0xgi'}) // Return `Hello 0xgi`

```


