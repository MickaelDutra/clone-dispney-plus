const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');   
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/main.css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('src/style/*.scss', buildStyles)
};