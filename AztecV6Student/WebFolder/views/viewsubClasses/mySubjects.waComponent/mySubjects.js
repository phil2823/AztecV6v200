
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'mySubjects';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText1 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText1.click = function richText1_click (event)// @startlock
	{// @endlock
		// load up a units/etc listing
		$$('breadText').setTextColor('blue');
		$$('breadText').setValue('Class: Math for the Medical Professional'); // set the class breadcrumb
		$$('breadText1').setTextColor('blue');
		$$('breadText1').setValue('Subject: Introduction to Algebra');			// set the subject breadcrumb
		$$('studentMain').loadComponent('/views/viewsubClasses/MyUnits.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
