/*
 * jScrollPane build script
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        uglify: {
            pm: {
                files: {
                    '../anuglar-plusminus.min.js': '../anuglar-plusminus.js'
                },
                options: {
                    preserveComments: 'some'
                }
            }
        },
        watch: {
            content: {
                files: ['../anuglar-plusminus.js'],
                tasks: 'uglify'
            }
        },
        connect: {
            site: {
                options: {
                    base: '../'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('serve', ['uglify', 'connect', 'watch']);

};