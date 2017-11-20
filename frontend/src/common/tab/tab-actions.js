export function selectTab(id) {
	return {
		type: 'TAB_SELECTED',
		payload: id
	}
}

export function showTabs(...tabIds) {
	const tabsToShow = {}
	tabIds.forEach(tabId => tabsToShow[tabId] = true)
	return {
		type: 'TAB_SHOWED',
		payload: tabsToShow
	}
}