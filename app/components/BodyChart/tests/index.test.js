import { render } from '@testing-library/react';
import React from 'react';

import BodyChart from '../index';

describe('<BodyChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<BodyChart />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<BodyChart />);

    expect(firstChild).toMatchSnapshot();
  });
});
