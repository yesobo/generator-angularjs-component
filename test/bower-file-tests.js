var assert = require('yeoman-assert');

module.exports = {
    getDescribeFn: getDescribeFn
};

function getDescribeFn(componentName, componentDescription) {

  return function describeFn() {

      it('should exists', function() {
        assert.file('bower.json');
      });

      it('should have "name" property as "bankia-ui-[componentName]"', function() {
        assert.fileContent('bower.json', '"name": "bankia-ui-' + componentName + '"');
      });

      it('should set "description" property', function() {
        assert.fileContent('bower.json', '"description": "' + componentDescription + '"');
      });

      it('should have "version" property as semver major.minor.patch format', function() {
        assert.fileContent('bower.json', '"version": "1.0.0"');
      });

      it('should set "main" property with [componentName].js and views/[componentName].html at dist folder',
        function() {
        var mainRegexStr = '"main": \\[\\n\\s+"dist\\/' + componentName + '.js",\\n\\s+"dist\\/views\\/' + componentName + '\\.html"';
        var mainRegex = new RegExp(mainRegexStr);
        assert.fileContent('bower.json', mainRegex);
      });

      it('should set "homepage" property with a link to AIADD stash repository page', function() {
        assert.fileContent('bower.json', '"homepage": "https://aqdes-stash.cm.es/stash/projects/AIADD/repos/ui-' + componentName + '"');
      });

      it('should set "repository" property with a link to AIADD stash git repository', function() {
        assert.fileContent('bower.json', '"repository": "https://aqdes-stash.cm.es/stash/scm/aiadd/ui-' + componentName + '.git"');
      });

      it('should add the component name and "bankia" to the "keyworkds" property', function() {
        var keywordsRegexpStr = '"keywords": \\[\\n\\s+"bankia",\\n\\s+"' + componentName + '"';
        var keywordsRegexp = new RegExp(keywordsRegexpStr);
        assert.fileContent('bower.json', keywordsRegexp);
      });
  };
}
