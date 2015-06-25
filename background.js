// fired when the user clicks the icon
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
      "file": "content-script.js"
  }, function () {
    chrome.browserAction.setIcon({
      path: 'img/icon-38x38-open.png'
    });
    setTimeout(function() {
      chrome.browserAction.setIcon({
        path: 'img/icon-38x38-close.png'
      });
    }, 5000);
  });
});
