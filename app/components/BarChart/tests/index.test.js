import { render } from '@testing-library/react';
import React from 'react';

import BarChart from '../index';

describe('<BarChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<BarChart />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<BarChart />);

    expect(firstChild).toMatchSnapshot();
  });
});
