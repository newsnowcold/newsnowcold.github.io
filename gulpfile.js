var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    cssFiles = require('./build-css.js'),
    jsFiles = require('./build-js.js');

gulp.task('css', function() {
    return gulp.src(cssFiles)
        .pipe(concat('app.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
        .on('error', function () {
            console.log('error')
        });
});

gulp.task('index', function() {
    return gulp.src('build.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('build'))
        .on('error', function () {
            console.log('error')
        });
});

gulp.task('build', function() {
    gulp.start('css', 'js', 'index');
});
