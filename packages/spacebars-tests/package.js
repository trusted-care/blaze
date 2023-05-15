Package.describe({
  name: 'spacebars-tests',
  summary: "Additional tests for Spacebars",
  version: '2.0.0-alpha300.5',
  git: 'https://github.com/meteor/blaze.git'
});

// These tests are in a separate package to avoid a circular dependency
// between the `spacebars` and `templating` packages.
Package.onTest(function (api) {
  api.use([
    'es5-shim@5.0.0-alpha300.5',
    'tinytest',
    'jquery@1.11.9 || 3.0.0',
    // 'test-helpers',
    'reactive-var',
    // 'markdown@1.0.14 || 2.0.0',
    'minimongo',
    'tracker',
    'mongo',
    'random@2.0.0-alpha300.5',
    'session@2.0.0-alpha300.5'
  ]);

  api.use([
    'spacebars@2.0.0-alpha300.5',
    'blaze'
  ]);
  api.use('templating@2.0.0-alpha300.5', 'client');

  api.addFiles([
    'async_tests.html',
    'async_tests.js',
    'template_tests.html',
    'template_tests.js',
    'templating_tests.html',
    'templating_tests.js',

    'old_templates.js', // backcompat for packages built with old Blaze APIs.
    'old_templates_tests.js'
  ], 'client');

  api.addFiles('template_tests_server.js', 'server');

  api.addAssets([
    'assets/markdown_basic.html',
    'assets/markdown_if1.html',
    'assets/markdown_if2.html',
    'assets/markdown_each1.html',
    'assets/markdown_each2.html'
  ], 'server');
});
