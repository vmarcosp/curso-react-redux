import React from 'react';
import Member from './member.jsx';

export default props =>  (
    <section>
        <ul>
            <li><Member name="Marcos" lastName="Vinicius" /></li>
            <li><Member name="Iago" lastName="Silva" /></li>
            <li><Member name="João" lastName="Paulo" /></li>
        </ul>
    </section>
)