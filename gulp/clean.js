var gulp = require('gulp'),
    del = require('del'),
    plumber = require('gulp-plumber');

var handleErrors = require('./handle-errors'),
    config = require('./config');

module.exports = {
    cleanBuildDir: cleanBuildDir
};

function cleanBuildDir() {
    return del([config.build.outputDir + '**/*', config.build.outputDir + '!git']);
}