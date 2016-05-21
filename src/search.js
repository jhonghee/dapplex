const searchText = (info) => {
	var myQuery = encodeURI('https://www.google.com/search?q=' + info.selectionText);
	chrome.tabs.create({
		url: myQuery
	});
}

export default searchText;
