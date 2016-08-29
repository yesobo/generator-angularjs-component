var assert = require('yeoman-assert');

module.exports = {
    getDescribeFn: getDescribeFn
};

function getDescribeFn(componentName, componentDescription) {

  return function describeFn() {

    describe('scripts folder,', function() {

      describe('when creating a component,', function() {

        describe('[componetName].main.js file', function() {

          var fileName = 'src/scripts/' + componentName + '.main.js';
          var declaredComponent = 'bk'  + componentName.charAt(0).toUpperCase() + componentName.slice(1);
          var importedComponent = 'Bk'  + componentName.charAt(0).toUpperCase() + componentName.slice(1);

          it('should exist', function() {
            assert.file(fileName);
          });

          it('should declare "bankia.ui.[componentName]" module', function() {
            assert.fileContent(fileName, '.module(\'bankia.ui.' + componentName + '\', [])');
          });

          it('should import Bk[ComponentName] from "./[componentName].component.js"', function() {
            assert.fileContent(fileName, 'import ' +  importedComponent + ' from \'./'  + componentName + '.component\';');
          });

          it('should declare "[bk-componentName]" component and use the imported Bk[ComponentName]', function() {
            assert.fileContent(fileName, '.component(\'' + declaredComponent + '\', ' + importedComponent + ')');
          });
        });

        describe('[componetName].component.js file', function() {

          it('should exist', function() {
            assert.file('src/scripts/' + componentName + '.component.js');
          });
        });

        describe('[componetName].controller.js file', function() {

          it('should exist', function() {
            assert.file('src/scripts/' + componentName + '.controller.js');
          });
        });
      });

      describe('if creating a directive', function() {
        // TODO: see templates/src/scripts/main.directive.es6.js file
      });
    });
  };
}
