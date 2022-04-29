// When the button is clicked, inject setPageBackgroundColor into current page
//changeColor.addEventListener("click", async () => {
  //let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  //chrome.scripting.executeScript({
    //target: { tabId: tab.id },
    //function: setPageBackgroundColor,
  //});
//});

document.onload = function() {
  alert(1);
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
    //function: setPageBackgroundColor,
  });
}

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  const video = document.querySelector('video');

  if (video) {
    console.log({ video })
    video.onended = function (e) {
      const button = document.querySelector('[data-e2e="arrow-right"]');
      button.click();
    }
  }


  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
