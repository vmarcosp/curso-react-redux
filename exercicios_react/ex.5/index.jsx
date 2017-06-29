import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family.jsx';
import Member from './member.jsx';

ReactDOM.render(
    <Family>
        <Member name="Marcos" lastName="Vinicius" />
    </Family>

    , document.getElementById('app'));