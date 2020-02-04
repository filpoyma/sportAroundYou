import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import IconSvg from '@/components/IconSvg';
import injectStyles from '@/utils/injectStyles';

const HeaderWithIcon = ({ title, titleSecondLine, icon, className }) => (
  <div className={className}>
    <div>
      <IconSvg type={icon} />
    </div>

    <div>
      <h1>
        {title} <br />
        {titleSecondLine}
      </h1>
    </div>
  </div>
);

HeaderWithIcon.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleSecondLine: PropTypes.string.isRequired,
  icon: PropTypes.string
};

HeaderWithIcon.defaultProps = {
  icon: 'none'
};

HeaderWithIcon.displayName = 'TableComponentHeaderWithIconElement';

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  h1 {
    font: 14px/16px var(--dff);
    padding-left: 10px;
  }
`;

export default injectStyles(HeaderWithIcon, styles);
