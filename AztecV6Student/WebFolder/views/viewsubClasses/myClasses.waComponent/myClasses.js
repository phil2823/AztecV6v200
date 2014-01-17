
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'myClasses';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var icon1 = {};	// @icon
	var richText3 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	icon1.click = function icon1_click (event)// @startlock
	{// @endlock
		alert('the public description html can be collapsed adn not viewed.. so not really as shown');
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		// I had an alert to capture the click
		$$('breadText').setTextColor('blue');
		$$('breadText').setValue("Classes/Basic Life Support (MED-201)");
		$$('alertText').setTextColor('black');
		$$('alertText').setBackgroundColor('white');
		$$('alertText').setValue("Navigation");
		$$('studentMain').loadComponent('/views/viewsubClasses/mySubjects.waComponent'); //load Subjects
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon1", "click", icon1.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
