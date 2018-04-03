import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../../components/BaseLayout'
import Menu from '../../components/Menu'

import rightArrow from './right-arrow.svg'
import './index.scss'

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Contact">
          <form name="contact-petra4" method="post" action="thanks" data-netlify="true" data-netlify-honeypot="bot-field">

          <p style={{display: 'none'}}>
            <label>Don’t fill this out if you are human: <input name="bot-field" /></label>
          </p>
            <input type="hidden" name="contact-form" value="contact" />
            <input placeholder="Your name here..." type="text" name="name" />
            <input placeholder="Your email here..." type="email" name="email" />
            <textarea placeholder="Your message here..." name="message"></textarea>
            <div>
              <button type="submit">Send <img src={rightArrow} alt=""/></button>
            </div>
          </form>
        </BaseLayout>
      </div>
    )
  }
}

Contact.propTypes = {
  route: React.PropTypes.object,
}

export default Contact

export const pageQuery = graphql`
  query Contact {
    site {
      siteMetadata {
        title
      }
    }
  }
`
