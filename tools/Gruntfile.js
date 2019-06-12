module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {  
        src: {
          files: [{
            expand: true,
            cwd: '../src/css/',
            src: ['*.scss'],
            dest: '../src/css/',
            ext: '.css'
        }]
        },                           
        dist: {    
            files: [{
                expand: true,
                cwd: '../dist/css/',
                src: ['*.scss'],
                dest: '../dist/css/',
                ext: '.css'
            }]
        }
      }, 
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: '../src/css/',
            src: ['*.css', '!*.min.css'],
            dest: '../dist/css/',
            ext: '.min.css'
          }]
        }
      },
      uglify: {
        dist: {
          files: {
            '../dist/js/main.min.js': ['../src/js/main.js', '../src/js/mailchimp.js'],
            '../dist/js/apply.min.js': ['../src/js/classie.js','../src/js/apply-mailchimp.js']
          }
        }
      },
      watch: {
        src: {
          files: ['../src/css/*.scss', ],
          tasks: ['default'],
        },
        scripts: {
            files: ['../src/js/*.js'],
            tasks: ['uglify']
        }
      },
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'watch', 'uglify']);
  
  };