
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var StudentCopyRight = {};	// @richText
	var breadText = {};	// @richText
	var richText4 = {};	// @richText
	var login1 = {};	// @login
	var menuSchool = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	StudentCopyRight.click = function StudentCopyRight_click (event)// @startlock
	{// @endlock
		alert('Credits: Aztec Software. Sal, Phil, JB and MK. Free icon set from www.aha-soft.com and ');
	};// @lock

	breadText.click = function breadText_click (event)// @startlock
	{// @endlock
		alert('click here brings you back to classes if down hiearchy');
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		//This is click on my Settings at top
		//cleanMenuButtons();
		//alert('wow'); was for debugging found error in load component
		$$('breadText').setValue('Your Account Settings');
		$$('alertText').setColor('black');
		$$('alertText').setBackgoundColor('white');
		$$('alertText').setValue('Information');
		alert('load settings screen into main panel');
		$$('studentMain').loadComponent('/views/messages.waComponent');
		
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('breadText').setTextColor("black");
		$$('breadText').setValue('Login at upper right');
		$$('alertText').setValue(' ');	
		$$('studentMain').loadComponent('/views/public.waComponent');

	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$$('studentMain').loadComponent('/views/classes2.waComponent');
		
	};// @lock

	menuSchool.click = function menuSchool_click (event)// @startlock
	{// @endlock
		// This is now larning plan menu item
		//$$('menuSchool').setBackgroundColor("blue");
		cleanMenuButtons();
		
		$$('menuSchool').setTextColor("blue");			// works
		$$('studentMain').loadComponent('/views/classes2.waComponent');
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	var checkLogin = WAF.directory.currentUser();
	if (checkLogin == null) {
		//alert('not logged');
		// WAF.loadComponent({id:'studentMain', path: '/views/public.waComponent'});
		//cleanMenuButtons();
		$$('breadText').setTextColor("black");
		$$('breadText').setValue('Login at upper right');
		$$('alertText').setValue(' ');	
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
		//$$('menuStudent').setTextColor("black");			
		$$('menuSchool').setTextColor("black");			
		//$$('menuClasses').setTextColor("black");			
		$$('breadText').setTextColor("black");
		$$('breadText').setValue("Learning Plan: All your registered Classes.");
		$$('alertText').setTextColor("black");
		$$('alertText').setValue("Information");
		
	};
	
	
// @region eventManager// @startlock
	WAF.addListener("StudentCopyRight", "click", StudentCopyRight.click, "WAF");
	WAF.addListener("breadText", "click", breadText.click, "WAF");
	WAF.addListener("richText4", "click", richText4.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("menuSchool", "click", menuSchool.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
