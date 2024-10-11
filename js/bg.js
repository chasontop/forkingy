"use strict";
!function () {

    function dino_swords() {
        chrome.tabs.create({url: chrome.runtime.getURL("dino_swords.html")}, () => {})
    }

    chrome.browserAction.onClicked.addListener(dino_swords);

    chrome.runtime.onInstalled.addListener((r) => {
        (r.reason === "install") && dino_swords();
    });

}();
