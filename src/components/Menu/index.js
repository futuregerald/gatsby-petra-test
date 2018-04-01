import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

class Menu extends React.Component {
  constructor(props){
  	super(props);
    this.handleClick = this.handleClick.bind(this);
  	this.state = {
      menu: false
    };
  }

  menuState() {
    if (this.state.menu) {
      return <div className="menuOpened">
        <ul className="menuList">
          <li><Link onClick={this.handleClick} to="/">About</Link></li>
          {/* <li><Link onClick={this.handleClick} to="/portfolio">Portfolio</Link></li> */}
          {/* <li><Link onClick={this.handleClick} to="/contact">Contact</Link></li> */}
        </ul>
      </div>
    } else {
      return ''
    }
  }

  handleClick() {
    console.log(this.state.menu);
    if (this.state.menu) {
      this.setState({menu: false})
    } else {
      this.setState({menu: true})
    }
  }

  render() {
    const componentClasses = ['menuTrigger'];
    if (this.state.menu) { componentClasses.push('show'); }

    return (
      <div className="Menu">
        <div className={componentClasses.join(' ')} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {this.menuState()}
      </div>
    )
  }
}

export default Menu
