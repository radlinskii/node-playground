const fs = require('fs');

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('.eslintrc.json', (err, file) => {
      return err ? reject(err) : resolve(file);
    });
  });
};

(async () => {
  try {
    console.log(await readFile().toString());
  } catch (e) {
    console.log(e);
  }
})();
