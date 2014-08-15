module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // region clean
        clean: ['dist'],
        // endregion clean

        // region copy
        copy: {
            main: {
                files: [
                    {src: 'client/index.html', dest: 'dist/index.html'},
                    {src: 'client/robots.txt', dest: 'dist/robots.txt'},

                    {src: 'client/writer/index.html', dest: 'dist/writer/index.html'},
                    {src: 'client/writer/config.js', dest: 'dist/writer/config.js'},
                    {src: 'client/writer/main.js', dest: 'dist/writer/main.js'},
                    {expand: true, flatten: true, src: ['client/writer/app/views/*'], dest: 'dist/writer/app/views/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/writer/app/templates/*'], dest: 'dist/writer/app/templates/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['client/writer/images/*'], dest: 'dist/writer/images/*', filter: 'isFile'},

                    {src: 'client/lib/requirejs/require.js', dest: 'dist/lib/requirejs/require.js'}
                ]
            }
        },
        // endregion copy
        cssmin: [],
        jshint: {
        },
        less: {
            development: {
                files: {
                    'client/writer/css/base.css': 'client/writer/css/base.less'
//                    'client/writer/css/layout.css': 'client/writer/css/layout.less',
//                    'client/writer/css/form.css': 'client/writer/css/form.less',
//                    'client/writer/css/button.css': 'client/writer/css/button.less',
//                    'client/writer/css/menu.css': 'client/writer/css/menu.less',
//                    'client/writer/css/main.css': 'client/writer/css/main.less'
                }
            }
        },
        uglify: {
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: './client/',
                    name: 'writer/init',
                    mainConfigFile: 'client/writer/config-build.js',
                    out: 'dist/writer/init.js',
                    findNestedDependencies: true
                }
            }
        },
        watch: {
            less: {
                files: ['client/writer/css/*.less'],
                tasks: ['less']
            }
        },
        githooks: {

        },
        karma: {},
        shell: {

        },
        // region bower
        bower: {
            install: {
            }
        }
        // endregion bower
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-shell');

    // Register grunt tasks
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('developing', ['watch:less']);
    grunt.registerTask('build', ['bower', 'clean', 'less', 'copy', 'requirejs']);
};