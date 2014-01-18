
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'myUnits';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var icon7 = {};	// @icon
	var icon8 = {};	// @icon
	// @endregion// @endlock

	// eventHandlers// @lock

	icon7.click = function icon7_click (event)// @startlock
	{// @endlock
		alert('Link added to your bookmarks');
	};// @lock

	icon8.click = function icon8_click (event)// @startlock
	{// @endlock
		alert('help stuff: nicer if redo pane on right with info');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon7", "click", icon7.click, "WAF");
	WAF.addListener(this.id + "_icon8", "click", icon8.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
