import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

test('App snapshot test', () => {
  const component = TestRenderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
