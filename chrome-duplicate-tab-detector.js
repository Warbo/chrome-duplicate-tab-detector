// Listen for tab-creation events
chrome.tabs.onCreated.addListener(function(newTab) {
    // Query all tabs with the same URL as the new tab
    chrome.tabs.query({url: newTab.url}, function(otherTabs) {
        otherTabs.forEach(function(otherTab) {
            // If this tab is not the new one, switch to it and close the new one
            if (otherTab.id !== newTab.id) {
                chrome.tabs.update(otherTab.id, {selected: true});
                chrome.tabs.remove(newTab.id);
            }
        });
    });
});
