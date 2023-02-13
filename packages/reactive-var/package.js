Package.describe({
  summary: "Reactive variable",
  version: '1.0.12'
});

Npm.depends({
  'lodash.isequal': '4.5.0',
});

Package.onUse(function (api) {
  api.export('ReactiveVar');
  api.use('ecmascript@0.15.1');
  api.use('tracker');

  api.addFiles('reactive-var.js');
  api.addAssets('reactive-var.d.ts', 'server');
});
