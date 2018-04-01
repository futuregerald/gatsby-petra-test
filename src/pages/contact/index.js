import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../../components/BaseLayout'
import Menu from '../../components/Menu'

class Contact extends React.Component {
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    console.log('...this.state', ...this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    // return (
    //   <div className="Contact">
    //     <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    //     <BaseLayout title="Contact">
    //       <p>Form will be here</p>
    //       <form name="contact" netlify-honeypot="bot-field" method="POST" action="thank-you" netlify onSubmit={this.handleSubmit}>
    //         <label style={{display: 'none'}}>honeypot<input name="bot-field" /></label>
    //         <label>Name:
    //           <input type="text" name="name" onChange={this.handleChange} />
    //         </label>
    //         <label>Email:
    //           <input type="email" name="email" onChange={this.handleChange} />
    //         </label>
    //         <label>Message:
    //           <textarea name="message" onChange={this.handleChange}></textarea>
    //         </label>
    //         <button type="submit">Send</button>
    //       </form>
    //     </BaseLayout>
    //   </div>
    // )
    return (
      <div className="Contact">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Contact">
          <p>Form will be here</p>
          <form
            name="contact"
            netlify-honeypot="bot-field"
            method="post"
            // action="/thank-you"
            data-netlify="true"
            // onSubmit={this.handleSubmit}
          >
            <label style={{display: 'none'}}>honeypot<input name="bot-field" /></label>
            <label>Name:
              <input type="text" name="name" />
            </label>
            <label>Email:
              <input type="email" name="email" />
            </label>
            <label>Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
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
