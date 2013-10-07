
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuStudent = {};	// @menuItem
	var menuSchool = {};	// @menuItem
	var menuClasses = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	menuStudent.click = function menuStudent_click (event)// @startlock
	{// @endlock
		// Add your code here
		alert('you hit my account');
		$$('studentMain').loadComponent('/views/myAccount.waComponent');
		cleanMainMenuItems();
	};// @lock

	menuSchool.click = function menuSchool_click (event)// @startlock
	{// @endlock
		// Add your code here
		alert('hit school');
		$$('studentMain').loadComponent('/views/school.waComponent');
		cleanMainMenuItems();
	};// @lock

	menuClasses.click = function menuClasses_click (event)// @startlock
	{// @endlock
		alert('hit classes');
		$$('studentMain').loadComponent('/views/classes2.waComponent');
		cleanMainMenuItems();
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	
	};// @lock
		
cleanMainMenuItems(){
	// clean up all the items
	};
	
// @region eventManager// @startlock
	WAF.addListener("menuStudent", "click", menuStudent.click, "WAF");
	WAF.addListener("menuSchool", "click", menuSchool.click, "WAF");
	WAF.addListener("menuClasses", "click", menuClasses.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
