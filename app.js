const {readFile} = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile('./content/first.txt', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
};
