import { render } from '@testing-library/react';
import React from 'react';

import Tooltip from '../index';

describe('<Tooltip />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Tooltip />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Tooltip />);

    expect(firstChild).toMatchSnapshot();
  });
});
