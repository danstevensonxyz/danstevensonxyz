import React from "react"

import Header from './Header.jsx'

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <div className="global-wrapper">
        <main>{children}</main>
          <footer>
          </footer>
      </div>
    </div>
  )
}

export default Layout
