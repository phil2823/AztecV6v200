
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var menuStudents = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		var checkLogin = WAF.directory.currentUser();
		
				
	};// @lock

	menuStudents.click = function menuStudents_click (event)// @startlock
	{// @endlock
		// Student Menu
		$$('main').loadComponent('/views/students.waComponent');
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuStudents", "click", menuStudents.click, "WAF");
// @endregion
};// @endlock
