chrome.browserAction.onClicked.addListener(function(tab) {
alert('making crazy!');
  console.log('chaosingzing' + tab.url + ' ! ');
  chrome.tabs.executeScript({
	file: 'gremlins.min.js'
  }, function(){
	chrome.tabs.executeScript({
		file: 'run_gremlins.js'
	});
  });
});
