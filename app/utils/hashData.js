import hash from 'object-hash';
import { memo } from 'react';

export function withDataHashKey(data) {
  return {
    data,
    dataHashKey: hash(data)
  };
}

export function hashMemo(component) {
  const memoizedComponent = memo(
    component,
    (prevProps, newProps) => prevProps.dataHashKey === newProps.dataHashKey
  );

  // Default props missed when we wrap the component. So pass it down manually
  memoizedComponent.defaultProps = component?.defaultProps || {};

  return memoizedComponent;
}
