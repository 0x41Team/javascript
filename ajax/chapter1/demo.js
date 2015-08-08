$(document).ready(function(e) {
	var $flowers = $('#flower-items');

	$flowers.find('a').on('click', function(e) {
		e.preventDefault();

		var $desc = $('#flower-description');

		switch($(this).attr('href')) {
			case 'calla.html':
				$desc.load('fragments/calla.html');
				break;
			case 'theory.html':
				$desc.load('fragments/theory.html');
				break;	
			case 'lilies.html':
				$desc.load('fragments/lilies.html');
				break;
		}	
	})
})