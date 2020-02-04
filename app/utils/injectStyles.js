import styled from 'styled-components';

export default function(component, styles) {
  const styledComponent = styled(component).withConfig({
    displayName: component.displayName ?? component.name
  })`
    ${styles}
  `;

  // Default props missed when we wrap the component. So pass it down manually
  styledComponent.defaultProps = component?.defaultProps || {};

  return styledComponent;
}
