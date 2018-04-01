import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BaseLayout from '../../components/BaseLayout'
import Menu from '../../components/Menu'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "react-form": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return ( //Trying ajax form on master - form submission only works on production.
      <div className="Thanks">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <BaseLayout title="Thanks">
          Thanks
        </BaseLayout>
      </div>
    )
  }
}

Thanks.propTypes = {
  route: React.PropTypes.object,
}

export default Thanks

export const pageQuery = graphql`
  query Thanks {
    site {
      siteMetadata {
        title
      }
    }
  }
`
