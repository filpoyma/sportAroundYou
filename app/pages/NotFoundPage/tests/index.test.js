import { render } from '@testing-library/react';
import React from 'react';

import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<NotFoundPage />);
    expect(firstChild).toMatchSnapshot();
  });
});
