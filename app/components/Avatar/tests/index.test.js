import { render } from '@testing-library/react';
import React from 'react';

import Avatar from '../index';

describe('<Avatar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Avatar />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Avatar />);

    expect(firstChild).toMatchSnapshot();
  });
});
