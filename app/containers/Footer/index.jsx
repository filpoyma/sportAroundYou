import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';

import Wrapper from '@/components/Wrapper';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const fullYear = dayjs().year();

const Footer = ({ ...rest }) => (
  <footer {...rest}>
    <Wrapper>{fullYear} © Спорт вокруг.</Wrapper>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired
};

Footer.defaultProps = {};

Footer.displayName = 'FooterContainer';

export default injectStyles(Footer, styles);
