const fs = require('fs');

exports.createFolder = (path) => {
  try {
    fs.mkdirSync(path, {
      recursive: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};

exports.writeFile = (path, buffer) => {
  try {
    fs.writeFileSync(path, buffer);
  } catch (error) {
    throw new Error(error);
  }
};
