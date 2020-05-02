export function getIcon(iconName) {
    try {
        return require('@iconify/icons-simple-icons/' + iconName + '.js').default
    } catch (e) {
        return null;
    }
}
