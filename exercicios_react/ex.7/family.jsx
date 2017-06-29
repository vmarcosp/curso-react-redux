import React from 'react';
import Utils from '../utils/utils.js';

export default props => (
    <section>
        { Utils.childrenWithProps(props.children,props) }
    </section>
)