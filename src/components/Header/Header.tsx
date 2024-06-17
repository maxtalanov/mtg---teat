import { Component } from 'react';
import Watch from '../Watch/Watch';
import LanguageSwitcherContainer from '../../containers/LanguageSwitcherContainer/LanguageSwitcherContainer'
import './Header.css';

const styleName: string = 'header'

class Header extends Component {
  render() {
    return (
        <header className={styleName}>
            <a 
                className={`${styleName}__logo-link`}
                href="#"
                target="_self"
                rel="noopener noreferrer"
                title="Go to..."
                aria-label="Logo link"
            >
                <img
                    className={`${styleName}__logo`}
                    src="https://via.placeholder.com/150" 
                    alt="Logo" 
                />
            </a>
            
            <div className={`${styleName}__container`}>
                <LanguageSwitcherContainer />
                <Watch />
            </div>
      </header>
    );
  }
}

export default Header;