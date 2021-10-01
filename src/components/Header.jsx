import React from 'react';

const Header = () => {
    return (
        <div id="header-nav">
            <header>
                <h1 id="header-text"><a href="/">Dan Stevenson</a></h1>
            </header>
            <nav id="top-nav">
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="https://www.twitter.com/DanStevensonCO" target="_blank">Twitter</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;