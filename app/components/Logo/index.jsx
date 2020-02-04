import React from 'react';

import logo from '@/images/logo.svg?file';
import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Logo = ({ ...rest }) => <img src={logo} alt="ROC Innovation Center | DigitalLab" {...rest} />;

Logo.propTypes = {};

Logo.defaultProps = {};

Logo.displayName = 'LogoComponent';

export default injectStyles(Logo, styles);
