
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'myUnits';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var icon8 = {};	// @icon
	var icon7 = {};	// @icon
	var clMessagesButton = {};	// @button
	var clChatButton = {};	// @button
	var clGroupsButton = {};	// @button
	var clInstructorButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	icon8.click = function icon8_click (event)// @startlock
	{// @endlock
		alert('help stuff: nicer if redo pane on right with info');
	};// @lock

	icon7.click = function icon7_click (event)// @startlock
	{// @endlock
		alert('Link added to your bookmarks');
	};// @lock

	clMessagesButton.click = function clMessagesButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('studentMain_clcontainer').loadComponent('views/viewsubClasses/myMessages.waComponent');
		cleanbuttons();
		$$('studentMain_clMessagesButton').setTextColor("blue");
	};// @lock

	clChatButton.click = function clChatButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('studentMain_clcontainer').loadComponent('views/viewsubClasses/myChat.waComponent');
		cleanbuttons();
		$$('studentMain_clChatButton').setTextColor("blue");
	};// @lock

	clGroupsButton.click = function clGroupsButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$('studentMain_clcontainer').loadComponent('views/viewsubClasses/myGroups.waComponent');
		cleanbuttons();
		$$('studentMain_clGroupsButton').setTextColor("blue");
	};// @lock

	clInstructorButton.click = function clInstructorButton_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert("you hit instructor button");
		//alert(getHtmlId('clcontainer'));
		//WAF.loadComponent({id:'studentMain_clcontainer', path:'/views/viewsubClasses/instructors2.waComponent'});
		$$('studentMain_clcontainer').loadComponent('views/viewsubClasses/instructors2.waComponent');
		cleanbuttons();
		$$('studentMain_clInstructorButton').setTextColor("blue");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon8", "click", icon8.click, "WAF");
	WAF.addListener(this.id + "_icon7", "click", icon7.click, "WAF");
	WAF.addListener(this.id + "_clMessagesButton", "click", clMessagesButton.click, "WAF");
	WAF.addListener(this.id + "_clChatButton", "click", clChatButton.click, "WAF");
	WAF.addListener(this.id + "_clGroupsButton", "click", clGroupsButton.click, "WAF");
	WAF.addListener(this.id + "_clInstructorButton", "click", clInstructorButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
