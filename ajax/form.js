$(document).ready(function() {
	$('#frm-lookup').submit(function(e) {
		e.preventDefault();

		var $results = $('#rep-lookup-result');
		var zipcode = $('#txt-zipcode').val();

		// collect the data

		$results.html('Your senators for '+ zipcode);
	})
})



// Demo funtion
$.getJSON(requestURL, {
	'zip': zipcode
}, function(data) {

})

// Note funtion
// Loop for object data and callback input two parameter [index, Data]
$.each(data.results, function(index, objData) {

});
