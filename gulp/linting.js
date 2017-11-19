'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    sassLint = require('gulp-sass-lint'),
    plumber = require('gulp-plumber'),
    gulpIf = require('gulp-if');

var config = require('./config'),
    handleErrors = require('./handle-errors'),
    util = require('./utils');

module.exports = {
    eslint: eslintFunction,
    eslintFix: eslintFixFunction,
    sassLint: sassLintFunction
};

// check app for eslint errors
function eslintFunction() {
    return gulp.src([
        'gulpfile.js', config.app + 'javascripts/**/*.js',
        config.gulp + '*.js'
    ])
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
}

// check app for eslint errors anf fix some of them
function eslintFixFunction() {
    return gulp
        .src(config.app + 'javascripts/**/*.js')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(eslint({fix: true}))
        .pipe(eslint.format())
        .pipe(gulpIf(util.isLintFixed, gulp.dest(config.app + 'javascripts')));
}

// check app for sasslint errors
function sassLintFunction() {
    return gulp
        .src([config.app + 'stylesheets/**/*.s+(a|c)ss'])
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(sassLint({
            options: {
                formatter: 'stylish',
                'merge-default-rules': true,
                'output-file': null
            },
            configFile: '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}
