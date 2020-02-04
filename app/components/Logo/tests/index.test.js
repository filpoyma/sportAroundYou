import { render } from '@testing-library/react';
import React from 'react';

import Logo from '../index';

describe('<Logo />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Logo />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Logo />);

    expect(firstChild).toMatchSnapshot();
  });
});
