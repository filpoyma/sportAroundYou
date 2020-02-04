import { render } from '@testing-library/react';
import React from 'react';

import NavigationBack from '../index';

describe('<NavigationBack />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NavigationBack />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<NavigationBack />);

    expect(firstChild).toMatchSnapshot();
  });
});
