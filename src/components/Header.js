import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
// import logo from '../images/logo.svg';
import logoMobile from '../images/the-vac-guy.png';
import MenuMobile from './MenuMobile';
import theVacGuy from '../../static/the-vac-guy.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img style={{
                maxHeight: 60,
                maxWidth: 60,
              }} alt="The Vac Guy logo" src={theVacGuy} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
