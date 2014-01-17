
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'classes2';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	
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
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
