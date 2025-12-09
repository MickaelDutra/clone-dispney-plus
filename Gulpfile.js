const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const ugligy = require('gulp-uglify');


function buildStyles() {
    return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/style'));
};

function buildImage() {
    return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

function buildScripts() {
    return gulp.src('src/script/*.js')
        .pipe(ugligy())
        .pipe(gulp.dest('dist/js'));
}

exports.default = gulp.parallel(buildStyles, buildImage, buildScripts);

exports.watch = function () {
    gulp.watch('src/style/*.scss', gulp.parallel(buildStyles))
    gulp.watch('src/script/*.js', gulp.parallel(buildScripts))
};