const { src, dest, series } = require("gulp");
var concat = require('gulp-concat');

function buildCustomElements(cb) {
    return src([
        './dist/mirror-workflow-element/runtime.js',
        './dist/mirror-workflow-element/polyfills.js',
        './dist/mirror-workflow-element/main.js',
    ])
        .pipe(concat('mirror-workflow-element.js', { newLine: ';' }))
        .pipe(dest("src/assets")).on('end', cb);
}

exports.buildElement = series(buildCustomElements);