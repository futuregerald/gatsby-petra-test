import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../../components/BaseLayout'
import Menu from '../../components/Menu'

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

class Contact extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { name: "", email: "", message: "" };
  // }
  //
  // handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "react-form": "contact", ...this.state })
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));
  //
  //   e.preventDefault();
  // };
  //
  // handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return ( //Try ajax form on master - form submission only works on production.
      <div className="Contact">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Contact">
          <p>Form will be here</p>
          <form name="contact-form" method="post" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="contact-form" value="contact" />
            <label>Name:
              <input type="text" name="name" />
            </label>
            <label>Email:
              <input type="email" name="email" />
            </label>
            <label>Message:
              <textarea name="message"></textarea>
            </label>
            <div netlify-recaptcha></div>
            <button type="submit">Send</button>
          </form>
        </BaseLayout>
      </div>
    )
    // return ( //Trying ajax form on master - form submission only works on production.
    //   <div className="Contact">
    //     <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    //     <BaseLayout title="Contact">
    //       <p>Form will be here</p>
    //       <form onSubmit={this.handleSubmit}>
    //         <p>
    //           <label>
    //             Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
    //           </label>
    //         </p>
    //         <p>
    //           <label>
    //             Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
    //           </label>
    //         </p>
    //         <p>
    //           <label>
    //             Message: <textarea name="message" value={message} onChange={this.handleChange} />
    //           </label>
    //         </p>
    //         <p>
    //           <button type="submit">Send</button>
    //         </p>
    //       </form>
    //     </BaseLayout>
    //   </div>
    // )
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
