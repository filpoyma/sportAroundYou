import PropTypes from 'prop-types';

import { IconsSvg } from '@/utils/iconsSvg';

const IconSvg = ({ type }) => IconsSvg[type];

IconSvg.propTypes = {
  type: PropTypes.string
};

IconSvg.defaultProps = {
  type: 'none'
};

IconSvg.displayName = 'IconSvgComponent';

export default IconSvg;
