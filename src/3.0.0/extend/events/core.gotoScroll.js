Core.gotoScroll = function(elList, fnChanged) {
	if(!Core.isNodeList(elList)) {
		throw 'Element must be type NodeList';
	}

	Array.prototype.forEach.call(elList, function(el, i, ar) {
		var href = el.href;
		var idElement = document.querySelector(href.substring(href.indexOf('#'), href.length));

		el.addEventListener('click', function(e) {
			e.preventDefault();

			if(!Core.isElementHTML(idElement)) {
				return;
			}

			if(Core.HAS_HISTORY) {
				history.replaceState({}, '', href);
			}

			Core.scrollTo(Core.offset(idElement).top, 500);

			if(Core.isFunction(fnChanged)) {
				fnChanged();
			}
		});
	});
};