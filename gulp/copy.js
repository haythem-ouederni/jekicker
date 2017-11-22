'use strict';

var gulp = require('gulp'),
    rev = require('gulp-rev'),
    plumber = require('gulp-plumber'),
    es = require('event-stream'),
    flatten = require('gulp-flatten');

var handleErrors = require('./handle-errors'),
    config = require('./config');

module.exports = {
    fonts: fonts,
    common: common,
    images: images
};

function fonts() {
    return es.merge(
        gulp.src(config.build.inputDir + '_assets/**/*.{woff,woff2,svg,ttf,eot,otf}')
            .pipe(plumber({ errorHandler: handleErrors }))
            .pipe(flatten())
            .pipe(rev())
            .pipe(gulp.dest(config.build.outputDir + '_assets'))
            .pipe(rev.manifest(config.build.revManifest, {
                base: config.build.outputDir,
                merge: true
            }))
            .pipe(gulp.dest(config.build.outputDir))
    );
}

function images() {
    return gulp.src(config.build.inputDir + '**/*.{gif,jpg,png}')
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulp.dest(config.build.outputDir));
}

function common() {
    return gulp.src([
        config.build.inputDir + 'robots.txt',
        config.build.inputDir + 'favicon.ico',
        config.build.inputDir + '.htaccess',
        config.build.inputDir + 'feed.xml',
        config.build.inputDir + 'sitemap.xml',
        config.build.inputDir + 'manifest.webapp'
    ], { dot: true })
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulp.dest(config.build.outputDir));
}
