import { render } from '@testing-library/react';
import React from 'react';

import LineChart from '../index';

describe('<LineChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<LineChart />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<LineChart />);

    expect(firstChild).toMatchSnapshot();
  });
});
