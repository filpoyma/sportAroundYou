import { render } from '@testing-library/react';
import React from 'react';

import TestPage from '../index';

describe('<TestPage />', () => {
  it('should shallow render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<TestPage />);
    expect(firstChild).toMatchSnapshot();
  });
});
