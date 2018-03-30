import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../components/BaseLayout'

class FourZeroFour extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Oops">
          <p>
            I couldn't find what you where looking for.<br />
            Checkout some <Link to="/portfolio">examples</Link> of my work instead.
          </p>
        </BaseLayout>
      </div>
    )
  }
}

FourZeroFour.propTypes = {
  route: React.PropTypes.object,
}

export default FourZeroFour

export const pageQuery = graphql`
  query FourZeroFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
