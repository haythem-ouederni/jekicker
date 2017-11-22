'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

var linting = require('./gulp/linting'),
    build = require('./gulp/build'),
    copy = require('./gulp/copy'),
    clean = require('./gulp/clean');

// copy tasks
gulp.task('copy:fonts', copy.fonts);

gulp.task('copy:common', copy.common);

gulp.task('copy:images', copy.images);

gulp.task('copy', ['copy:fonts', 'copy:common', 'copy:images']);

// linting tasks
gulp.task('eslint', linting.eslint);

gulp.task('eslint:fix', linting.eslintFix);

gulp.task('sasslint', linting.sassLint);

// this tasks performs all the taks related to checking the code : eslint,
// sassLint,...
gulp.task('linting', ['eslint', 'sasslint']);

// cleaning tasks
gulp.task('clean-output-dir', clean.cleanOutputDir);

gulp.task('clean-input-dir', clean.cleanInputDir);

// building tasks this task if responsible with building the production repo
gulp.task('build:prod', build);

gulp.task('build', ['clean-output-dir'], function (cb) {
    runSequence('copy', 'build:prod');
});
