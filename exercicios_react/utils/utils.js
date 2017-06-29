import React from 'react';

class Utils {
    static childrenWithProps(children, props) {
        return React.Children.map(children,
            child => React.cloneElement(child, { ...props }))
    }
}

module.exports = Utils;