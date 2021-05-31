import { mocked } from 'ts-jest/utils';
import fs from 'fs';
import { createFolder, writeFile } from '../../scripts/util';

jest.mock('fs');

const fsMock = mocked(fs, true);

test('Should create a folder at a specific address', () => {
  const path = 'path/test';

  createFolder(path);
  expect(fsMock.mkdirSync.mock.calls.length).toBe(1);
});

test('Folder creation should fail', () => {
  const path = 'path/test';

  fsMock.mkdirSync.mockImplementation(() => {
    throw 'Folder creation failed';
  });

  expect(() => createFolder(path)).toThrow(new Error('Folder creation failed'));
});

it('Should dump the given buffer into a specified file', () => {
  const file = 'path/test.txt';
  const buffer = 'This is a test';

  writeFile(file, buffer);
  expect(fsMock.writeFileSync.mock.calls.length).toBe(1);
});

test('Buffer dump to file should fail', () => {
  const file = 'path/test.txt';
  const buffer = 'This is a test';

  fsMock.writeFileSync.mockImplementation(() => {
    throw 'Error writing to file';
  });

  expect(() => writeFile(file, buffer)).toThrow(
    new Error('Error writing to file')
  );
});
