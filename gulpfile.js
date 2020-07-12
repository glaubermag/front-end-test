const imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Gulp task to minify CSS files
gulp.task('styles', function() {
    return gulp.src('./css/estilo.css')
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist/css/'))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src(['./*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});


// Gulp task to minify img files
gulp.task('minify', function() {
    return gulp
        .src("./img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"));
});