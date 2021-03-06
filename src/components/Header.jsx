import React from 'react';

const Header = () => {
    return (
        <div id="header-nav">
            <header>
                <h1 id="header-text"><a href="/">Dan Stevenson</a></h1>
            </header>
            <nav id="top-nav">
                <ul>
                    <li><a href="https://github.com/danstevensonxyz/" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/danstevensonxyz/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com/danstevensonxyz" target="_blank">Twitter</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;