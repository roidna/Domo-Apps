module.exports = function(grunt) {

  grunt.initConfig({
    release: {
      options: {
        npm: true,
        tagName: 'v<%= version %>',
        commitMessage: 'v<%= version %>',
        github: {
          repo: 'DomoApps/domo.js',
          usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
          passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-release');
};