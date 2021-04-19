jest.mock('fs');

const fs = require('fs');
const { createFolder, writeFile } = require('../../scripts/util');

test('Should create a folder at a specific address', () => {
  const path = 'path/test';

  createFolder(path);
  expect(fs.mkdirSync.mock.calls.length).toBe(1);
});

test('Folder creation should fail', () => {
  const path = 'path/test';

  fs.mkdirSync.mockImplementation(() => {
    throw 'Folder creation failed';
  });

  expect(() => createFolder(path)).toThrow(new Error('Folder creation failed'));
});

it('Should dump the given buffer into a specified file', () => {
  const file = 'path/test.txt';
  const buffer = 'This is a test';

  writeFile(file, buffer);
  expect(fs.writeFileSync.mock.calls.length).toBe(1);
});

test('Buffer dump to file should fail', () => {
  const file = 'path/test.txt';
  const buffer = 'This is a test';

  fs.writeFileSync.mockImplementation(() => {
    throw 'Error writing to file';
  });

  expect(() => writeFile(file, buffer)).toThrow(
    new Error('Error writing to file')
  );
});
