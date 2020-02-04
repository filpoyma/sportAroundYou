import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Root from '../index';

const renderer = new ShallowRenderer();

describe('<Root />', () => {
  it('should shallow render and match the snapshot', () => {
    renderer.render(<Root />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
