(function(){

	var tags = {
		base: ['DOCTYPE','html','title','body',{
			h: ['h1','h2','h3','h4','h5','h6']
		}, 'p','br','hr'],
		formatting: ['acronym','abbr','address','b','bdi','bdo','big','blockquote','center','cite','code','del','dfn','em','font','i','ins','kbd','mark','meter','pre','progress','q',
		'rp','rt','ruby','s','samp','small','strike','strong','sub','sup','time','tt','u','var','wbr'],
		formInput: ['form','input','textarea','button','select','optgroup','option','label','fieldset','legend','datalist','keygen','output'],
		frames: ['frame','frameset','noframes','iframe'],
		images: ['img','map','area','canvas','figcaption','figure'],
		media: ['audio','source','track','video'],
		links: ['a','link','nav'],
		lists: ['ul','ol','li','dir','dl','dt','dd','menu','menuitem'],
		tables: ['table','caption','th','tr','td','thead','tbody','tfoot','col','colgroup'],
		styles: ['style','div','span','header','footer','main','section','article','aside','details','dialog','summary'],
		meta: ['script','noscript','applet','embed','object','param']
	}

	var options: {
		type: ['button', {
			attributes: ['autofocus','disable']
		}]
	}

	var controlType = {
		input: ['text'],
		radio: ['radio'],
		select: ['selected'],
		submit: ['button','submit'],
		checkBox: ['checkbox'],

	}
	var options: ['selected','radioButton','checkbox']

	gi-rbt: function() {
		check: function() {

		}
	}
})();






(function(){
	/*
		Description:
		Set radio button checked - unchecked , check status only controller or group controller via name 
	
		Syntax:
		* formId: form wraper control
		* name: group form name
		return -> list radioButton 
	*/
	var radioButton = document.getElementById('formId').name;

	for (var i = 0; i < radioButton.length; i++) {
		if (radioButton[i].checked) 
			return radioButton[i].value;
	};



	document.getElementById('id').checked // Result: true, false
})();

	
	var validateAttr = function('nameControl') {
		// validate object attributes
		// return false => response messages to browser and extension chrome
		return true; // false
	}

	var used = function() {
		// Get value
		gi('radioButton', {
			type: 'radio',
			group: true // only
		}).getValue

		// Set value
		gi('radioButton', {
			type: 'text'
		}).setValue = 'Lap trinh NodeJS'


		// Add, get, remove attributes
		gi('radioButton').attributes = {
			type: 'add', //get , remove
			href: 'http://github.com'
		}
	}