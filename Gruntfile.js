module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['lib/*.js', 'test/*.js'],
            tasks: ['jshint']
        },
        jshint: {
            files: ['lib/*.js', 'test/*.js'],
            options: {
                browser: false,
                node: true,
                globals: {
                    require: true,
                    exports: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};