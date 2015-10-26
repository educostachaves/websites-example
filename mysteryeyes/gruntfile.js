module.exports = function(grunt) {
 
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        meta: {
            basePath: './',
            srcPath: './src/sass/',
            deployPath: './dev/css/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // SASS
        sass: {
            dev: {
            	options: { 
			        style: 'compact'
			    },
                files: {
                    '<%= meta.deployPath %>main.css': '<%= meta.srcPath %>main.scss'
                }
            }
        },

        //CONCAT
        concat: {
            options: {
                separator: ';'
            },
            dev: {
                src: ['src/js/assets/*.js'],
                dest: 'src/js/main.js'
            }
        },

        //Uglify
        uglify: {
            'dev/js/main.js': 'src/js/main.js' 
        },

        //watch
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
 
    });
 
    // Plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Tasks.
    grunt.registerTask('default', [ 'sass' , 'concat' , 'uglify' ]);
 
};