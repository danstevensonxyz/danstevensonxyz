import React from 'react';

const Header = () => {
    return (
        <div class="header-block">
            <h1 className="main-heading">
            <a href="/">Dan Stevenson</a>
            </h1>
            <nav class="nav-links">
                <a href="https://github.com/DanStevensonCO" target="_blank" class="nav-link">GitHub</a> 
                <a href="https://linkedin.com/in/DanStevensonCO" target="_blank" class="nav-link">LinkedIn</a> 
            </nav>
        </div>
    );
};

export default Header;