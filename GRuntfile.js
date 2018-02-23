module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};
