exports.icon_template = (icon_name, icon_data) =>
  `// This file was auto generated!
import * as React from 'react';
import { GenerateIcon } from '../../template';

export const ${icon_name} = GenerateIcon([${icon_data}]);
${icon_name}.displayName = '${icon_name}';
`;

exports.index_template = (icon_name) =>
  `export { ${icon_name} } from './icon/${icon_name}';\n`;

exports.package_template = (icon_name) => `{
  "main": "dist/fleet-icons-icon-${icon_name}.cjs.js",
  "module": "dist/fleet-icons-icon-${icon_name}.esm.js"
}`;
