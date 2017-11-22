'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    useref = require("gulp-useref"),
    plumber = require('gulp-plumber'),
    gulpIf = require('gulp-if'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev'),
    revReplace = require("gulp-rev-replace"),
    lazypipe = require('lazypipe');

var config = require('./config'),
    handleErrors = require('./handle-errors');

var jsTask = lazypipe()
    .pipe(uglify);


module.exports = function () {
    var manifest = gulp.src(config.build.revManifest);
    return gulp.src(
        [config.build.inputDir + '**/*.html',
        config.build.inputDir + '**/*.js',
        config.build.inputDir + '**/*.css'])
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(useref())
        .pipe(gulpIf('**/*.js', jsTask()))
        .pipe(gulpIf('**/*.html', htmlmin({ collapseWhitespace: true })))
        .pipe(gulpIf('**/*.!(html)', rev()))
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest(config.build.outputDir));
};