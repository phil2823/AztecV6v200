﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Classes';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var menuItem5 = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock
	alert("ouch1");
	$$("menuBar1").setWidth("700px");
	$$("menuItem1").setWidth("150px");
	alert("ouch2");
	
	
	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock
	
	


	// @region eventManager// @startlock
	WAF.addListener(this.id + "_menuItem5", "click", menuItem5.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
