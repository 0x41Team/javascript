var plus = function(a,b) {
	return (
		console.log(a + b); // 5
		console.log(this); // object
		console.log(arguments); // arrays input value
		)
}(2,3)