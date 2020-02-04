import { render } from '@testing-library/react';
import React from 'react';

import Spinner from '../index';

describe('<Spinner />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Spinner />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Spinner />);

    expect(firstChild).toMatchSnapshot();
  });
});
