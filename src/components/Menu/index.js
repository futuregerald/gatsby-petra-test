import React from 'react'
import Link from 'gatsby-link'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">About</Link><br />
        <Link to="/portfolio">Portfolio</Link><br />
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}

export default Menu
