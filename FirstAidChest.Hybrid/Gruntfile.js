module.exports = function(grunt) {
  grunt.initConfig({
    includeSource: {
      options: {
        basePath: 'www',
        templates: {
          html: {
            js: '<script type="text/javascript" src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
          }
        }
      },
      myTarget: {
        files: {
          'www/index.html': 'www/index-dev.html'
        }
      }
    },
    wiredep: {
      task: {
        src: [
          'www/index.html'
        ],
        options: {
          exclude: [ 'lib/angular/angular.js' ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['include'],
        options: {
          event: ['added', 'deleted']
        }
      },
      css: {
        files: ['**/*.css'],
        tasks: ['include'],
        options: {
          event: ['added', 'deleted']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('include', ['includeSource','wiredep']);
};
