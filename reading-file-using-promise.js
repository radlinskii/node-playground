const fs = require('fs');

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('.eslintrc.json', (err, file) => {
      return err ? reject(err) : resolve(file);
    });
  });
};

readFile()
  .then(file => {
    return file.toString();
  })
  .then(string => {
    console.log(string);
  })
  .catch(err => {
    console.log(err);
  });
