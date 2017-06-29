import React from 'react';

export default props => (
    <section>
        { React.cloneElement(props.children,{...props}) }
    </section>
)