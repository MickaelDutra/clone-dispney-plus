const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function buildStyles() {
    return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/main.css'));
};

function buildImage() {
    return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

exports.default = gulp.parallel(buildStyles, buildImage);

exports.watch = function () {
    gulp.watch('src/style/*.scss', gulp.parallel(buildStyles))
};