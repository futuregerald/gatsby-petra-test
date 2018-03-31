import React from 'react'
import Link from 'gatsby-link'

import LogoSVG from './logo.svg'
import './index.scss'

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <Link to={'/'} >
          <img src={LogoSVG} alt="PV"/>
        </Link>
      </div>
    )
  }
}

export default Logo
