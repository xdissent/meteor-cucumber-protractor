cucumber-protractor
===================

[Protractor](https://github.com/angular/protractor) support for
[CucumberJS](https://github.com/xdissent/meteor-cucumber)


Usage
-----

**NOTE:** Protractor *requires* an [AngularJS](https://angularjs.org) app to be
present on the url under test.

Add to your Meteor app via [Meteorite](http://oortcloud.github.io/meteorite/):

```console
$ mrt add cucumber-protractor
```

Set the [world](https://github.com/cucumber/cucumber-js#world) constructor to 
`Cucumber.World.Protractor` in a support helper:

```coffee
# app/tests/features/support/world.coffee

module.exports = ->

  @World = Cucumber.World.Protractor
```

Use the
[Protractor API](https://github.com/angular/protractor/blob/master/docs/api.md)
from within your
[step definitions](https://github.com/cucumber/cucumber-js#step-definitions):

```coffee
# app/tests/features/step_definitions/protractorStepDefinitions.coffee

module.exports = ->

  @Given /^I am a website visitor using protractor$/, (callback) ->
    return callback new Error 'Protractor not available' unless @browser?
    callback()

  @When /^I go to the home page with protractor$/, (callback) ->
    # @home() is a helper to navigate to the app's root url
    @home().then callback, callback

  @Then 'I should see "$text" using protractor', (text, callback) ->
    # @driver is an instance of a Protractor driver
    @browser.getPageSource().then (source) ->
      return callback() unless -1 is source.indexOf text 
      callback new Error "Expected to find #{text} on page"
    , callback
```
