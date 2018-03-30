import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Petra Venturini`}
        />
        Hi, <strong>Petra Venturini</strong>, I design stuff.{' '}
        <a target="_blank" href="https://linkedin.com/in/petra-venturini-641191154">
          Checkout my LinkedIn profile
        </a>
      </p>
    )
  }
}

export default Bio
