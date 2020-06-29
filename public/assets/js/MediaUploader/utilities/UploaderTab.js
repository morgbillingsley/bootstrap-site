class UploaderTab {
    createTab(name, child = null) {
        const tab = document.createElement('div');
        tab.setAttribute('id', name);
        tab.setAttribute('class', 'tab-pane');
        tab.setAttribute('role', 'tabpanel');
        tab.setAttribute('aria-labelledby', name + '-tab');
        if (child !== null) {
            tab.append(child);
        }
        return tab;
    }
}

export default UploaderTab;