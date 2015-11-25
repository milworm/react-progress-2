var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('watch', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    //watch('src/**/*.scss', function() {
    //    gulp.start('css-dev');
    //});

    //watch('src/**/*.*', function() {
    //    reload();
    //});
});

gulp.task('css-dev', function() {
    return gulp.src('src/**/*.scss')
                .pipe(
                    sass({
                        errLogToConsole: true,
                        outputStyle: 'compressed'
                    }).on("error", sass.logError)
                )
                .on("error", function(error) {
                    console.log(error);
                })
                .pipe(gulp.dest('app/css'))
                .pipe(reload({stream: true}));
});