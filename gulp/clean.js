var del = require('del');

var config = require('./config');

module.exports = {
    cleanOutputDir: cleanOutputDir,
    cleanInputDir: cleanInputDir
};

function cleanOutputDir() {
    return del([
        config.build.outputDir + '**/*',
        '!' + config.build.outputDir + '.git'
    ], {force: true});
}

function cleanInputDir() {
    return del([
        config.build.inputDir + '**/*'
    ], {force: true});
}
