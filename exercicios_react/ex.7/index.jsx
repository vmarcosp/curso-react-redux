import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family.jsx';
import Member from './member.jsx';

ReactDOM.render(
    <Family lastName="Silva">
        <Member name="Marcos"/>
        <Member name="Rafael"/>
        <Member name="João"/>
    </Family>

    , document.getElementById('app'));