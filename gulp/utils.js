'use strict';

module.exports = {
    isLintFixed: isLintFixed
};

function isLintFixed(file) {
    // Has ESLint fixed the file contents?
    return file.eslint !== null && file.eslint.fixed;
}
