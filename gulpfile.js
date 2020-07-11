const gulp = require('gulp');

const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function stylesMethod() {

    return gulp.src("./css/*.css")
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));

}

exports.styles = stylesMethod;