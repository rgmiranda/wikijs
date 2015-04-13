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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['coffee', 'uglify']);
    grunt.registerTask('compile', ['coffee']);
    return null;
};
