'use strict';

var gulp = require('gulp');

var linting = require('./gulp/linting');

gulp.task('eslint', linting.eslint);

gulp.task('eslint:fix', linting.eslintFix);

gulp.task('sasslint', linting.sassLint);

// this tasks performs all the taks related to checking the code : eslint,
// sassLint,...
gulp.task('linting', ['eslint', 'sasslint']);
