import path from 'path';

const bootstrap_icons = path.dirname(
  require.resolve('bootstrap-icons/package.json')
);

export const BOOTSTRAP_ICONS_PATH = path.resolve(bootstrap_icons, 'icons');
export const SOURCE_PATH = path.resolve(__dirname, '..', 'src');
export const SINGLE_ICON_PATH = path.resolve(__dirname, '..', 'icon');
