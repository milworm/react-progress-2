const gulp = require('gulp')
const watch = require('gulp-watch')
const gutil = require('gulp-util')
const browserSync = require('browser-sync')
const reload = browserSync.reload

gulp.task('watch', () => {
    browserSync({
        server: {
            baseDir: './'
        }
    })

    watch('src/**/*.*', () => {
        reload();
    })
})