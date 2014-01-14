
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var breadText1 = {};	// @richText
	var breadText = {};	// @richText
	var richText4 = {};	// @richText
	var login1 = {};	// @login
	var menuStudent = {};	// @menuItem
	var menuSchool = {};	// @menuItem
	var menuClasses = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	breadText1.click = function breadText1_click (event)// @startlock
	{// @endlock
		alert('akin to first one: or use breadcrumbs in this space');
	};// @lock

	breadText.click = function breadText_click (event)// @startlock
	{// @endlock
		alert('click here brings you back to classes if down hiearchy');
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		//This is click on my Settings at top
		cleanMenuButtons();
		$$('studentMain').loadComponent('views/myAccount.waComponeent');
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		cleanMenuButtons();
		$$('studentMain').loadComponent('/views/public.waComponent');
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$$('studentMain').loadComponent('/views/classes2.waComponent');
		$$('menuClasses').setTextColor("blue");
	};// @lock

	menuStudent.click = function menuStudent_click (event)// @startlock
	{// @endlock
		//
		cleanMenuButtons();
		//$$('menuStudent').setBackgroundColor("blue");	doesnt work
		$$('menuStudent').setTextColor("blue");			// works
		$$('studentMain').loadComponent('/views/messages.waComponent');
		
	};// @lock

	menuSchool.click = function menuSchool_click (event)// @startlock
	{// @endlock
		// This is now larning plan menu item
		//$$('menuSchool').setBackgroundColor("blue");
		cleanMenuButtons();
		
		$$('menuSchool').setTextColor("blue");			// works
		$$('studentMain').loadComponent('/views/classes2.waComponent');
		
	};// @lock

	menuClasses.click = function menuClasses_click (event)// @startlock
	{// @endlock
		//$$('menuClasses').setBackgroundColor("blue");
		cleanMenuButtons();
		$$('menuClasses').setTextColor("blue");			// works
		$$('studentMain').loadComponent('/views/catalog.waComponent');
		
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	var checkLogin = WAF.directory.currentUser();
	if (checkLogin == null) {
		//alert('not logged');
		// WAF.loadComponent({id:'studentMain', path: '/views/public.waComponent'});
		cleanMenuButtons();	
		$$('studentMain').loadComponent('/views/public.waComponent');
		//$$('menuClasses').setTextColor("blue");
		}
		else {
			// alert('already loggedin');
			cleanMenuButtons();
			$$('menuSchool').setTextColor("blue");
			$$('studentMain').loadComponent('/views/classes2.waComponent');
			}
			
	};// @lock
		
	function cleanMenuButtons (){
		// reset the menu button text back to normal
		$$('menuStudent').setTextColor("black");			
		$$('menuSchool').setTextColor("black");			
		$$('menuClasses').setTextColor("black");			
		$$('breadText').setTextColor("black");
		$$('breadText1').setTextColor("black");
		$$('breadText').setValue("Start Learning with the Learning Plan");
		$$('breadText1').setValue(" ");
	};
	
	
// @region eventManager// @startlock
	WAF.addListener("breadText1", "click", breadText1.click, "WAF");
	WAF.addListener("breadText", "click", breadText.click, "WAF");
	WAF.addListener("richText4", "click", richText4.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("menuStudent", "click", menuStudent.click, "WAF");
	WAF.addListener("menuSchool", "click", menuSchool.click, "WAF");
	WAF.addListener("menuClasses", "click", menuClasses.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
