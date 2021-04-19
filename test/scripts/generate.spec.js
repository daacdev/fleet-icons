jest.mock('fs');
jest.mock('../../scripts/components');

const fs = require('fs');
const path = require('path');
const components = require('../../scripts/components');
const fixture = require('./fixtures/data_icons');

const icons = fixture.map((icon_path) => {
  const [key] = Object.keys(icon_path);
  return key;
});

it('Should generate the icon components', () => {
  const _create = jest.fn();
  const _export = jest.fn();

  fs.readdirSync.mockReturnValue(icons);
  fs.readFileSync.mockImplementation((icon_path) => {
    const key = path.basename(icon_path);
    const icon_data = fixture.filter((icon) => icon[key])[0][key];
    return icon_data;
  });

  components.mockReturnValue({
    create: _create,
    export: _export,
  });

  require('../../scripts/generate');

  expect(_create).toHaveBeenCalledTimes(fixture.length);
  expect(_export).toHaveBeenCalledTimes(fixture.length);
});
