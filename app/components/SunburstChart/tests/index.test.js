import { render } from '@testing-library/react';
import React from 'react';

import SunburstChart from '../index';

describe('<SunburstChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SunburstChart />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<SunburstChart />);

    expect(firstChild).toMatchSnapshot();
  });
});
