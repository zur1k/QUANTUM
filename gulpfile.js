'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');




gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
});
gulp.task('watch', gulp.parallel ('sass', function() {
    gulp.watch('./src/**/*.scss', gulp.parallel('sass'));

}));


function style() {

    return (
        gulp
            .src("styles/*.sass")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("styles"))
    );
}

exports.style = style;