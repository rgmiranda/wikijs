module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                options: {
                    bare: true
                },
                files: {
                    'build/wiki-<%= pkg.version %>.js': ['src/**/*.coffee'],
                }
            }
        },
        uglify: {
            minimize: {
                files: {
                    'build/wiki-<%= pkg.version %>.min.js': ['build/wiki-<%= pkg.version %>.js']
                }
            }
        },
        less: {
            compile: {
                files: {
                    'build/wiki-<%= pkg.version %>.css': ['styles/styles.less']
                }
            }
        }
    });
    grunt.loadNpmTasks( 'grunt-contrib-coffee' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.registerTask( 'default', [ 'less', 'coffee', 'uglify' ] );
    grunt.registerTask( 'compile-less', [ 'less' ] );
    return null;
};
