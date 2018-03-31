import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './index.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log('Martin', post);
    if (post.frontmatter.layout === 'layout1') {
      console.log('LAYOUT 1');
      return (
        <div className="postListItem">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title} {post.frontmatter.layout}</h1>
          <p>
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      )
    } else if (post.frontmatter.layout === 'layout2') {
      console.log('LAYOUT 2');
      return (
        <div className="postListItem">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title} {post.frontmatter.layout}</h1>
          <p>
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      )
    } else {
      console.log('NOT LAYOUT 1');
      return (
        <div className="postListItem">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      )
    }
    // return (
    //   <div>
    //     <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
    //     <h1>{post.frontmatter.title}</h1>
    //     <p>
    //       {post.frontmatter.date}
    //     </p>
    //     <div dangerouslySetInnerHTML={{ __html: post.html }} />
    //   </div>
    // )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        layout
      }
    }
  }
`
