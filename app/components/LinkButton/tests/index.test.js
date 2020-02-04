import { render } from '@testing-library/react';
import React from 'react';

import LinkButton from '../index';

describe('<LinkButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<LinkButton />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<LinkButton />);

    expect(firstChild).toMatchSnapshot();
  });
});
