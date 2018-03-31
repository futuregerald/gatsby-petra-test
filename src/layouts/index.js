import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/Menu'
import Logo from '../components/Logo'

import './index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header = (
      <div className="Header">
        <Logo />
        <Menu />
      </div>
    );
    return (
      <div className="Template">
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
