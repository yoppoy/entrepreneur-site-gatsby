import React from 'react';
import Icon from "@iconify/react";
/**
 * @return {null}
 */
export default function SimpleIcon({name, ...props}) {
    const icon = require('../../../static/assets/icons/simple-icons-custom/' + name + '.js').default;

    if (icon)
        return (<Icon icon={icon} {...props}/>);
    return null;
}
