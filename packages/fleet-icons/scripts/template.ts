export const icon_template = (icon_name: string, icon_data: string): string =>
  `// This file was auto generated!
import * as React from 'react';
import { GenerateIcon } from '../../template';

export const ${icon_name} = GenerateIcon([${icon_data}]);
${icon_name}.displayName = '${icon_name}';
`;

export const index_template = (icon_name: string): string =>
  `export { ${icon_name} } from './icon/${icon_name}';\n`;

export const package_template = (icon_name: string): string => `{
  "main": "dist/fleet-icons-icon-${icon_name}.cjs.js",
  "module": "dist/fleet-icons-icon-${icon_name}.esm.js"
}`;
