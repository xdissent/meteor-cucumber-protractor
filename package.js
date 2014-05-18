
Package.describe({
  summary: "Protractor support for CucumberJS"
});

Npm.depends({
  'protractor': '0.22.0'
});

Package.on_use(function (api, where) {
  api.imply(['cucumber', 'cucumber-selenium']);
  api.use('coffeescript', 'server');
  api.use('cucumber', 'server');
  api.use('cucumber-selenium', 'server');
  api.add_files('src/world.coffee', 'server');
});
