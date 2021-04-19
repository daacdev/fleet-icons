const path = require('path');
const bootstrap_icons = path.dirname(
  require.resolve('bootstrap-icons/package.json')
);

exports.BOOTSTRAP_ICONS_PATH = path.resolve(bootstrap_icons, 'icons');
exports.SOURCE_PATH = path.resolve(__dirname, '..', 'src');
exports.SINGLE_ICON_PATH = path.resolve(__dirname, '..', 'icon');
