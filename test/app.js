var helpers = require('yeoman-test');
var path = require('path');

var bowerFileTests = require('./bower-file-tests');
var srcFolderTests = require('./src-folder-tests');

describe('Bankia UI generator', function() {

  var runGenerator,
      componentName = 'mytestname',
      componentDescription = 'My test description';

  beforeEach(function () {
    runGenerator = helpers.run(path.join( __dirname, '../generators/app'))
        // .withOptions({ foo: 'bar' })    // Mock options passed in
        // .withArguments(['name-x'])      // Mock the arguments
        .withPrompts({
          name: componentName,
          version: "1.0.0",
          description: componentDescription
        }) // Mock the prompt answers
        //.toPromise()                   // Get a Promise back for when the generator finishes
        ;
  });

  beforeEach(function (done) {
    runGenerator.on('end', done);
  });

  describe('bower.json', bowerFileTests.getDescribeFn(componentName, componentDescription));

  describe.only('src folder', srcFolderTests.getDescribeFn(componentName));
});
