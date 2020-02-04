import { render } from '@testing-library/react';
import React from 'react';

import InBodyTest from '../index';

describe('<InBodyTest />', () => {
  it('should shallow render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<InBodyTest />);
    expect(firstChild).toMatchSnapshot();
  });
});
