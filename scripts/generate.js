const fs = require('fs');
const path = require('path');
const _camelcase = require('lodash.camelcase');
const _upperfirst = require('lodash.upperfirst');

const {
  BOOTSTRAP_ICONS_PATH,
  SOURCE_PATH,
  SINGLE_ICON_PATH,
} = require('./constants');
const components = require('./components')(SOURCE_PATH, SINGLE_ICON_PATH);

const icon_files = fs
  .readdirSync(BOOTSTRAP_ICONS_PATH)
  .filter((file) => file.endsWith('.svg'));

for (const icon_name of icon_files) {
  const componentName = _upperfirst(
    _camelcase(icon_name.replace('.svg', '').trim())
  );
  const icon_path = path.resolve(BOOTSTRAP_ICONS_PATH, icon_name);
  let icon_data = fs.readFileSync(icon_path, { encoding: 'utf8' });

  icon_data = icon_data.replace(/<(svg|\/)\b([\s\S]*?)>/g, '');
  let kebab_case_props = icon_data.match(/([a-zA-Z]+)-([a-zA-Z])([a-zA-Z-]*)/g);
  kebab_case_props?.forEach((prop) => {
    icon_data = icon_data.replace(prop, _camelcase(prop));
  });

  let icon_svg_childs = icon_data.match(/<\b([\s\S]*?)\/>/g);
  components.create(componentName, icon_svg_childs);
  components.export(componentName);
}
