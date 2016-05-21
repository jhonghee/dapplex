import searchText from './search';

console.log(searchText);

chrome.browserAction.onClicked.addListener(() => console.log("Hello Extension"));

chrome.contextMenus.create({
	title: "Google It: %s",
	contexts: ['selection'],
	onclick: searchText
});

