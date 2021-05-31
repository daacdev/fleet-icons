import {
  icon_template,
  index_template,
  package_template,
} from '../../scripts/template';

it('Should return a template string for the icon component', () => {
  const icon_name = 'TestIcon';
  const icon_data = ['path_icon_1', 'path_icon_2', 'path_icon_3'];
  expect(icon_template(icon_name, icon_data.join())).toEqual(
    expect.stringMatching(
      new RegExp(`${icon_name}|${icon_data.join('|')}`, 'g')
    )
  );
});

it('Should return a template string for the index', () => {
  const icon_name = 'TestIcon';
  expect(index_template(icon_name)).toEqual(
    expect.stringMatching(new RegExp(`${icon_name}`, 'g'))
  );
});

it('Should return a template string for the packages', () => {
  const icon_name = 'TestIcon';
  expect(package_template(icon_name)).toEqual(
    expect.stringMatching(new RegExp(`${icon_name}`, 'g'))
  );
});
