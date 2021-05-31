import fs from 'fs';

export const createFolder = (path: string): void => {
  try {
    fs.mkdirSync(path, {
      recursive: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const writeFile = (path: string, buffer: string): void => {
  try {
    fs.writeFileSync(path, buffer);
  } catch (error) {
    throw new Error(error);
  }
};
