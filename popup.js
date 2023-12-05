document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle');
    toggleButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['content.js']
            });
        });
    }, false);
}, false);
