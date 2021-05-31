import fs from 'fs';
import path from 'path';
import _camelcase from 'lodash.camelcase';
import _upperfirst from 'lodash.upperfirst';

import {
  BOOTSTRAP_ICONS_PATH,
  SINGLE_ICON_PATH,
  SOURCE_PATH,
} from './constants';
import { Components } from './components';

const components = new Components(SOURCE_PATH, SINGLE_ICON_PATH);
const icon_files = fs
  .readdirSync(BOOTSTRAP_ICONS_PATH)
  .filter((file) => file.endsWith('.svg'));

for (const icon_name of icon_files) {
  const component_name = _upperfirst(
    _camelcase(icon_name.replace('.svg', '').trim())
  );

  const icon_path = path.resolve(BOOTSTRAP_ICONS_PATH, icon_name);
  let icon_data = fs.readFileSync(icon_path, { encoding: 'utf8' });

  icon_data = icon_data?.replace(/<(svg|\/)\b([\s\S]*?)>/g, '');
  const kebab_case_props = icon_data?.match(
    /([a-zA-Z]+)-([a-zA-Z])([a-zA-Z-]*)/g
  );

  kebab_case_props?.forEach((prop) => {
    icon_data = icon_data.replace(prop, _camelcase(prop));
  });

  const icon_svg_children = icon_data?.match(/<\b([\s\S]*?)\/>/g);
  components.create(
    component_name,
    icon_svg_children ? icon_svg_children?.join() : ''
  );
  components.export(component_name);
}
