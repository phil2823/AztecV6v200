
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'classes2';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var clMessagesButton = {};	// @button
	var clChatButton = {};	// @button
	var clGroupsButton = {};	// @button
	var clInstructorButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

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
	
function cleanbuttons() {
	// clear all the buttonss of colors restore them to original state
	// I love building code automatically with emacs
	$$('studentMain_clInstructorButton').setTextColor("#737373");
	$$('studentMain_clLessonButton').setTextColor("#737373");
	$$('studentMain_clAnnouncementButton').setTextColor("#737373");
	$$('studentMain_clChatButton').setTextColor("#737373");
	$$('studentMain_clMessagesButton').setTextColor("#737373");
	$$('studentMain_clGroupsButton').setTextColor("#737373");
	$$('studentMain_clProgressButton').setTextColor("#737373");
	
	};
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_clMessagesButton", "click", clMessagesButton.click, "WAF");
	WAF.addListener(this.id + "_clChatButton", "click", clChatButton.click, "WAF");
	WAF.addListener(this.id + "_clGroupsButton", "click", clGroupsButton.click, "WAF");
	WAF.addListener(this.id + "_clInstructorButton", "click", clInstructorButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
