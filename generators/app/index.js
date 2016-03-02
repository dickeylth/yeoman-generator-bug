'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stunning ' + chalk.red('') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: '测试输入项目名?'
    }, {
      type: 'input',
      name: 'name',
      message: 'Project description?'
    }];

    this.prompt(prompts, function (props) {
      console.log(props);
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  }
});
