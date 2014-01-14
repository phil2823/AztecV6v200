
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'myClasses';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText3 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		// I had an alert to capture the click
		$$('breadText').setTextColor('blue');
		$$('breadText').setValue("Class; Math for the Medical Professional");
		$$('breadText1').setValue(""); // should be blank
		$$('studentMain').loadComponent('/views/viewsubClasses/mySubjects.waComponent'); //load Subjects
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
