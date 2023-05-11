/* eslint-env meteor */
Package.describe({
  name: 'html-tools',
  summary: 'Standards-compliant HTML tools',
  version: '2.0.0-alpha300.5',
  git: 'https://github.com/meteor/blaze.git'
});

Package.onUse(function (api) {
  api.use('ecmascript@1.0.0-alpha300.5');
  api.use('htmljs@2.0.0-alpha300.5');
  api.imply('htmljs@2.0.0-alpha300.5');

  api.export('HTMLTools');
  api.mainModule('main.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');

  api.use('html-tools');
  api.use('htmljs@2.0.0-alpha300.5');
  api.use('blaze-tools'); // for `toJS`

  api.addFiles([
    'charref_tests.js',
    'tokenize_tests.js',
    'parse_tests.js',
  ]);
});
