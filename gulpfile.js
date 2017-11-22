'use strict';

var gulp = require('gulp');

var linting = require('./gulp/linting'),
    build = require('./gulp/build'),
    copy = require('./gulp/copy');

gulp.task('copy', ['copy:fonts', 'copy:common']);

gulp.task('copy:fonts', copy.fonts);

gulp.task('copy:common', copy.common);

gulp.task('eslint', linting.eslint);

gulp.task('eslint:fix', linting.eslintFix);

gulp.task('sasslint', linting.sassLint);

// this tasks performs all the taks related to checking the code : eslint,
// sassLint,...
gulp.task('linting', ['eslint', 'sasslint']);

// this task if responsible with building the production repo
gulp.task('build', ['copy'], build);
