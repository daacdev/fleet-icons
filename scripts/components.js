const fs = require('fs');
const path = require('path');
const {
  icon_template,
  index_template,
  package_template,
} = require('./template');
const { createFolder, writeFile } = require('./util');

module.exports = (source_path, single_icon_path) => {
  const icons_path = path.resolve(source_path, 'icon');
  const index_file = fs.createWriteStream(`${source_path}/index.ts`, {
    autoClose: true,
  });

  createFolder(icons_path);

  return {
    create(icon_name, icon_data) {
      try {
        const component_path = path.resolve(source_path, 'icon', icon_name);
        const single_component_path = path.resolve(single_icon_path, icon_name);

        createFolder(component_path);
        createFolder(single_component_path);

        writeFile(
          path.resolve(component_path, 'index.tsx'),
          icon_template(icon_name, icon_data)
        );

        writeFile(
          path.resolve(single_component_path, 'package.json'),
          package_template(icon_name)
        );
      } catch (error) {
        throw new Error(error);
      }
    },

    export(icon_name) {
      try {
        index_file.write(index_template(icon_name));
      } catch (error) {
        throw new Error(error);
      }
    },
  };
};
