import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Logo from '@/components/Logo';
import Wrapper from '@/components/Wrapper';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

class Header extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <header className={className}>
        <Wrapper>
          <Logo />
        </Wrapper>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string.isRequired
};

Header.defaultProps = {};

Header.displayName = 'HeaderContainer';

export default injectStyles(Header, styles);
