import fs from 'fs';
import path from 'path';

import { icon_template, index_template, package_template } from './template';
import { createFolder, writeFile } from './util';

export class Components {
  #source_path: string;
  #single_icon_path: string;
  #icons_path: string;
  #index_file: fs.WriteStream;

  constructor(source_path: string, single_icon_path: string) {
    this.#source_path = source_path;
    this.#single_icon_path = single_icon_path;
    this.#icons_path = path.resolve(source_path, 'icon');
    this.#index_file = fs.createWriteStream(`${source_path}/index.ts`, {
      autoClose: true,
    });

    createFolder(this.#icons_path);
  }

  create(icon_name: string, icon_data: string): void {
    try {
      const component_path = path.resolve(this.#source_path, 'icon', icon_name);
      const single_component_path = path.resolve(
        this.#single_icon_path,
        icon_name
      );

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
  }

  export(icon_name: string): void {
    try {
      this.#index_file.write(index_template(icon_name));
    } catch (error) {
      throw new Error(error);
    }
  }
}
