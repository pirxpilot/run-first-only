[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# run-first-only

Execute only first call of the async function. Like [async.memoize], but limited to no-args
functions, and without any dependencies. Use it in the browser.

After first call, all subsequent once will get the same result. If first call is still in
progress, subsequent calls are placed in the queue and notified when initial operation is completed.

## Install

```sh
$ npm install --save run-first-only
```

## Usage

```js
var runFirstOnly = require('run-first-only');

function openDatabase(fn) {
  // do something async to open DB
  asyncOperationThatOpensDatabase(connection, name, options, fn)
}

var open = runFirstOnly(openDatabase);


open(function(err, database) {
  // database is open here
});
open(function(err, database) {
  // it's still open here and it was opened only once
});

```

## License

MIT © [Damian Krzeminski](https://furkot.com)

[async.memoize]: http://caolan.github.io/async/docs.html#memoize

[npm-image]: https://img.shields.io/npm/v/run-first-only.svg
[npm-url]: https://npmjs.org/package/run-first-only

[travis-url]: https://travis-ci.org/pirxpilot/run-first-only
[travis-image]: https://img.shields.io/travis/pirxpilot/run-first-only.svg

[gemnasium-image]: https://img.shields.io/gemnasium/pirxpilot/run-first-only.svg
[gemnasium-url]: https://gemnasium.com/pirxpilot/run-first-only
