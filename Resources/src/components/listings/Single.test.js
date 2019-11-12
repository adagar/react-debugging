import React from 'react';
import TestRenderer from 'react-test-renderer';
import Single from './Single';

describe('Single snapshot', () => {
  test('Single snapshot test', () => {
    const component = TestRenderer.create(<Single />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
