const {readFile, writeFile} = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf8', (err, first) => {
  if (err) {
    console.log(err);
    return;
  }
  readFile('./content/second.txt', 'utf8', (err, second) => {
    if (err) {
      console.log(err);
      return;
    }
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting next task');
