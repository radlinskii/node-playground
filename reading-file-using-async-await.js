const fs = require('fs');

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('.eslintrc.json', (err, file) => {
      return err ? reject(err) : resolve(file.toString());
    });
  });
};

(async () => {
  try {
    console.log(await readFile());
  } catch (e) {
    console.log(e);
  }
})();
