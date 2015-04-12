module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            coffee_to_js: {
                options: {
                    bare: true
                },
                files: {
                    'build/wiki.js': ['src/**/*.coffee'],
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('compile', ['coffee']);
    return null;
};
