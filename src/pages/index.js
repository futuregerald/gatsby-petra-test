import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../components/BaseLayout'
import Menu from '../components/Menu'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Menu />
        <BaseLayout title="Hi">
          <p>
            I'm Petra, I design stuff.<br />
            Here are some <Link to="/portfolio">examples</Link>.
          </p>
        </BaseLayout>
      </div>
    )
  }
}

HomeIndex.propTypes = {
  route: React.PropTypes.object,
}

export default HomeIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
