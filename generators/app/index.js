var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // overrriding yeoman's Base generator contructor
  constructor: function() {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    //this.option('coffee'); // This method adds support for a `--coffee` flag
    this.input = {};
  },

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your component name',
      default : 'component' // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'version',
      message : 'Your component version',
      default : '0.1.0'
    },
    {
      type    : 'input',
      name    : 'description',
      message : 'Your component description',
      default : ''
    }]).then(function (answers) {
      this.log('component name', answers.name);
      this.input.name = answers.name.toLowerCase();
      this.input.componentName = 'bk' + answers.name.charAt(0).toUpperCase() + answers.name.slice(1);
      this.input.capitalizedComponentName = 'Bk' + answers.name.charAt(0).toUpperCase() + answers.name.slice(1);
      this.input.version = answers.version;
      this.input.description = answers.description;
    }.bind(this));
  },

  // the following methods runs in sequence
  generateBower: function() {
    console.log('generating bower.json file ...');
    this.fs.copyTpl(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json'),
      {
        input: this.input
      }
    );
  },

  generateSrc: function() {
    console.log('generating src files');
    this.fs.copyTpl(
      this.templatePath('src/scripts/main.component.es2015.js'),
      this.destinationPath('src/scripts/' + this.input.name + '.main.js'),
      {
        input: this.input
      }
    );
    this.fs.copyTpl(
      this.templatePath('src/scripts/component.component.es2015.js'),
      this.destinationPath('src/scripts/' + this.input.name + '.component.js'),
      {
        input: this.input
      }
    );
    this.fs.copyTpl(
      this.templatePath('src/scripts/controller.component.es2015.js'),
      this.destinationPath('src/scripts/' + this.input.name + '.controller.js'),
      {
        input: this.input
      }
    );
  }

  // priorities
  /*
  initializing - Your initialization methods (checking current project state, getting configs, etc)
  prompting - Where you prompt users for options (where you'd call this.prompt())
  configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  default - If the method name doesn't match a priority, it will be pushed to this group.
  writing - Where you write the generator specific files (routes, controllers, etc)
  conflicts - Where conflicts are handled (used internally)
  install - Where installation are run (npm, bower)
  end - Called last, cleanup, say good bye, etc
  */
});
