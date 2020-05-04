export function getCustomIcon(name) {
    if (name) {
        try {
            const icon = require('../../static/assets/icons/simple-icons-custom/' + name + '.js').default;

            if (icon)
                return (icon);
        } catch (e) {
            console.error(e);
            return null;
        }
    } else {
        return null;
    }
}
