import React from "react"

import Header from './Header.jsx'

const Layout = ({ children }) => {
  return (
    <div className="header-wrapper">
      <header className="global-header"> <Header /></header>
      <div className="global-wrapper">
        <main>{children}</main>
          <footer>
          </footer>
      </div>
    </div>
  )
}

export default Layout
