﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'classes2';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var clAnnouncementButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	clAnnouncementButton.click = function clAnnouncementButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert('should have loaded');
	
		$$('clcontainer2').loadComponent('/viewsubClasses/announcements2.waComponent');
		
	};// @lock
	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_clAnnouncementButton", "click", clAnnouncementButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
