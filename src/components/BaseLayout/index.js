import React from 'react'
import Link from 'gatsby-link'

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
