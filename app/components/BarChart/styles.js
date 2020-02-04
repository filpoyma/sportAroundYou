import { css } from 'styled-components';

const BarChartStyles = css`
  position: relative;
  ${props => css`
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`;

export default BarChartStyles;
