import React from 'react';
import '../styles/index.scss';
import { Helmet } from "react-helmet"
import Logo from './logo';

const Layout = ({src, children, name}) => {
    let iframe;
    if (src != undefined) {
        iframe = <iframe src={src} width="100%" style={{ height: '650', border: 'none' }} title="Apply to Hoagie."></iframe>;
    }
    return (
        <div className="form-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{name} - Hoagie Forms</title>
            </Helmet>
            <div className="logo-section">
                <Logo name="Forms"/>
            </div>
            <div className="form-section">
                <div className="form">
                    {iframe}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;