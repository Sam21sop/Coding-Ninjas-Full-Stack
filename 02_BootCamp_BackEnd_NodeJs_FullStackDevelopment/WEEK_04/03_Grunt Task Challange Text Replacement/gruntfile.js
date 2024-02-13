
module.exports = function (grunt) {
    grunt.initConfig({
        // Configure replace task
        replace: {
        dist: {
          options: {
            patterns: [
              {
                match: /ninjacoding\.com/g,
                replacement: 'codingninjas.com'
              }
            ]
          },
          files: [
            {
              expand: true, 
              flatten: true, 
              src: ['src/index.html'], 
              dest: 'build/'
            }
          ]
        }
      }
    });
    // load libraries
    grunt.loadNpmTasks('grunt-replace');

    // setting up the task
    grunt.registerTask('default', ['replace']);
  };