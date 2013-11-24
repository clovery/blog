module.exports = function(grunt) {
  'use strict'

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig({
    stylus: {
      build: {
        options: {
          compress: true
        },

        files: [{
          expand: true,
          cwd: 'assets/stylus',
          src: ['**/*.styl'],
          dest: 'style/',
          ext: '.css'
        }]
      }
    }

    , watch: {
      options: {
        livereload: true
      },

      stylus: {
        files: 'assets/stylus/*.styl',
        tasks: ['stylus:build']
      }
    }
  })

  /**
   * build task
   */

  grunt.registerTask('default', [])
}
