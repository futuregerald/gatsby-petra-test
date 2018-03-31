import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

class BaseLayout extends React.Component {
  render() {
    return (
      <div className="BaseLayout">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
