const fs = require('fs');

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('.eslintrc.json', (err, file) => {
      return err ? reject(err) : resolve(file.toString());
    });
  });
};

readFile()
  .then(file => {
    console.log(file);
  })
  .catch(err => {
    console.log(err);
  });
