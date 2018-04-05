browser.runtime.onMessage.addListener(notify);

function notify(message) {
  var creating = browser.tabs.create({
    active: true,
    url: "test.html?url=" + message
  });
}