import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { GenerateIcon } from '../../src/template';

const svg_paths_d = [
  'M10.348 7.643c0-1.112.488-1.754 1.318-1.754.682 0 1.139.47 1.187 1.108H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742zM4.457 11l1.02-4.184h.045L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005z',
  'M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z',
];

const Paths = svg_paths_d.map((d, key) => <path key={key} d={d} />);
const Icon = GenerateIcon(Paths);

test('Simple rendering Icon component without props', () => {
  const { container } = render(<Icon />);
  expect(container).toMatchSnapshot();
});

test('Rendering Icon component with spinner prop', () => {
  const { container } = render(<Icon spinner />);
  expect(container).toMatchSnapshot();
});

test('Rendering Icon component with rotate prop', () => {
  const { container } = render(<Icon rotate={45} />);
  expect(container).toMatchSnapshot();
});

test('Rendering Icon component with size prop', () => {
  const { container } = render(<Icon size="45px" />);
  expect(container).toMatchSnapshot();
});

test('Icon component accessibility', () => {
  render(<Icon title="Icon" desc="An example of an Icon icon" />);

  const IconTest = screen.getAllByTitle('Icon');
  expect(IconTest).toMatchSnapshot();
});
