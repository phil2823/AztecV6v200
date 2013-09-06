
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		// Add your code here
		// load up classes component
		
		$$('studentMain').loadComponent('/views/classes.waComponent');
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock
