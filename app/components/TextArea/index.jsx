import PropTypes from 'prop-types';
import React from 'react';
import Textarea from 'react-textarea-autosize';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const TextArea = ({ ...rest }) => <Textarea {...rest} />;

TextArea.propTypes = {
  className: PropTypes.string.isRequired
};

TextArea.defaultProps = {};

TextArea.displayName = 'TextAreaComponent';

export default injectStyles(TextArea, styles);
