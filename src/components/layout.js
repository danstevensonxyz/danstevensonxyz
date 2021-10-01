import React from "react"

import Header from './Header.jsx'

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
        <Header />
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}

export default Layout
