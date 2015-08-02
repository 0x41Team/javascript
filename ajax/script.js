/*
	Description:
	Documentation: https://xhr.spec.whatwg.org/
*/

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject('Microsoft.XMLHTTP');
}
request.open('GET','data.txt',false); // Async
request.send();
document.write(JSON.stringify(request));
console.log(request);

// Example post methods.
var post = new XMLHttpRequest();
post.open('POST','url',true)
post.send('fname=Miss&lname=Mouws');