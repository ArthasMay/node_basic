const geektime = require('./lib')

geektime.addListener('newLesson', (res) => {
  if (res.price < 80) {
    console.log('buy', res);
  }
});
