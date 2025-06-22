// import { Link } from 'gatsby';
import React from 'react';
import logo from '../assets/hoagie_colorless.svg';

const Logo = ({name}) => {
    return (
        <a href="https://hoagie.io/" aria-label={`${name} - Visit Hoagie.io`}>
        <div class="logo-wrapper">
           <div class="logo-img"><img width="50px" src={logo} alt={`${name} logo`} /></div>
           <div class="logo-name hoagie logo">{name}</div>
        </div>
        </a>
    );
}

export default Logo;