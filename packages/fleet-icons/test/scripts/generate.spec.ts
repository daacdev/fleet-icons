import { mocked } from 'ts-jest/utils';
import fs from 'fs';
import path from 'path';

import { Components } from '../../scripts/components';

import fixture from './fixtures/data_icons';

jest.mock('fs');
jest.mock('../../scripts/components');

const fsMock = mocked(fs, true);
const ComponentsMock = mocked(Components, true);

const icons = fixture.map((icon_path) => {
  const [key] = Object.keys(icon_path);
  return key;
});

it('Should generate the icon components', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fsMock.readdirSync.mockReturnValue(icons);
  fsMock.readFileSync.mockRestore();

  fsMock.readFileSync.mockImplementation((icon_path) => {
    const key = path.basename(<string>icon_path);
    const icon_data = fixture.filter((icon) => icon[key])?.[0]?.[key];
    return icon_data;
  });

  const _create = jest.fn();
  const _export = jest.fn();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ComponentsMock.mockImplementation(() => ({
    create: _create,
    export: _export,
  }));

  require('../../scripts/generate');
  expect(_create).toHaveBeenCalledTimes(fixture.length);
  expect(_export).toHaveBeenCalledTimes(fixture.length);
});
