
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuClasses = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	menuClasses.click = function menuClasses_click (event)// @startlock
	{// @endlock
		$$('studentMain').loadComponent('/views/classes2.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	
	};// @lock
		

// @region eventManager// @startlock
	WAF.addListener("menuClasses", "click", menuClasses.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
