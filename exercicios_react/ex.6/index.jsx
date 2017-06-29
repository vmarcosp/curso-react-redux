import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family.jsx';
import Member from './member.jsx';

ReactDOM.render(
    <Family lastName="Vinicius">
        <Member name="Marcos"/>
    </Family>

    , document.getElementById('app'));