import { mocked } from 'ts-jest/utils';
import fs from 'fs';
import path from 'path';
import { Components } from '../../scripts/components';
import * as util from '../../scripts/util';
import {
  index_template,
  package_template,
  icon_template,
} from '../../scripts/template';

jest.mock('fs');
jest.mock('../../scripts/util');

const fsMock = mocked(fs, false);
const { createFolder, writeFile } = mocked(util, true);

const source_path = 'src';
const single_icon_path = 'single';

beforeEach(() => {
  createFolder.mockRestore();
  writeFile.mockRestore();
});

it('the consumer should call the class constructor', () => {
  new Components(source_path, single_icon_path);
  expect(fsMock.createWriteStream).toHaveBeenCalledTimes(1);
  expect(createFolder).toHaveBeenCalledWith(path.resolve(source_path, 'icon'));
});

it('The consumer should be able to create a icon component', () => {
  const consumer = new Components(source_path, single_icon_path);
  const icon_name = 'TestIcon';
  const icon_data = ['icon_data_1', 'icon_data_2', 'icon_data_3'];

  expect(createFolder).toHaveBeenCalledWith(path.resolve(source_path, 'icon'));

  consumer.create(icon_name, icon_data.join());
  const component_path = path.resolve(source_path, 'icon', icon_name);
  const single_component_path = path.resolve(single_icon_path, icon_name);

  expect(createFolder).toHaveBeenCalledWith(component_path);
  expect(createFolder).toHaveBeenCalledWith(single_component_path);

  expect(writeFile).toHaveBeenCalledWith(
    path.resolve(component_path, 'index.tsx'),
    icon_template(icon_name, icon_data.join())
  );

  expect(writeFile).toHaveBeenLastCalledWith(
    path.resolve(single_component_path, 'package.json'),
    package_template(icon_name)
  );
});

it('Icon component creation should fail', () => {
  const consumer = new Components(source_path, single_icon_path);
  const icon_name = 'TestIcon';
  const icon_data = ['icon_data_1', 'icon_data_2', 'icon_data_3'];

  createFolder.mockImplementation(() => {
    throw 'Component creating error';
  });

  expect(() => consumer.create(icon_name, icon_data.join())).toThrow(
    new Error('Component creating error')
  );
});

it('The consumer should be able to export an icon component', () => {
  const write = jest.fn();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fsMock.createWriteStream.mockReturnValue({ write });

  const consumer = new Components(source_path, single_icon_path);
  const icon_name = 'TestIcon';

  consumer.export(icon_name);
  expect(write).toHaveBeenCalledWith(index_template(icon_name));
});

it('Icon component export should fail', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fsMock.createWriteStream.mockReturnValue({
    write: () => {
      throw 'Error writing index file';
    },
  });

  const consumer = new Components(source_path, single_icon_path);
  const icon_name = 'TestIcon';

  expect(() => consumer.export(icon_name)).toThrow(
    new Error('Error writing index file')
  );
});
