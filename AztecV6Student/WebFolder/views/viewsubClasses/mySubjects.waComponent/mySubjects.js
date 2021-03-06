﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'mySubjects';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var icon6 = {};	// @icon
	var icon2 = {};	// @icon
	var icon1 = {};	// @icon
	var richText1 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	icon6.click = function icon6_click (event)// @startlock
	{// @endlock
		alert('collapses all the desription boxes');
		
	};// @lock

	icon2.click = function icon2_click (event)// @startlock
	{// @endlock
		alert('provide help in right pane');
	};// @lock

	icon1.click = function icon1_click (event)// @startlock
	{// @endlock
		alert('Page has been added to bookmarks');
	};// @lock

	richText1.click = function richText1_click (event)// @startlock
	{// @endlock
		// load up a units/etc listing
		$$('breadText').setTextColor('blue');
		$$('breadText').setValue('Class: Math for the Medical Professional'); // set the class breadcrumb
		$$('breadText1').setTextColor('blue');
		$$('breadText1').setValue('Change this line to breadcrumbs');			// set the subject breadcrumb
		$$('studentMain').loadComponent('/views/viewsubClasses/MyUnits.waComponent');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon6", "click", icon6.click, "WAF");
	WAF.addListener(this.id + "_icon2", "click", icon2.click, "WAF");
	WAF.addListener(this.id + "_icon1", "click", icon1.click, "WAF");
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
