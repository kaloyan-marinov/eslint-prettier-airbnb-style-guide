const express = require('express');

const x = 1; // requires 1 empty line above
if (x) {
  console.log(x);
}

const y = 'Hello'; // complains because of .prettierrc

const app = express();

// func-names
app.get('/', function (req, res) {
  res.send('Hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});

const obj = {
  hello: function () {
    console.log('hello');
  },
};

// class-method-use-this
class A {
  foo() {
    console.log(
      'Hello world!'
    ); /* error Expected 'this' to be used by class method 'foo'. */
  }
} // spaced-comment
