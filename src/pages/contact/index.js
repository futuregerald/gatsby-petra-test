import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../../components/BaseLayout'
import Menu from '../../components/Menu'

class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="Contact">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Contact">
          <p>Form will be here</p>
          <form name="contact" method="POST" netlify>
            <p>
              <label>Your Name: <input type="text" name="name"></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email"></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
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
