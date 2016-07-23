const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const {reload} = browserSync

gulp.task('watch', () => {
    browserSync({
        server: {
            baseDir: '../'
        },
        serveStatic: ['../', './']
    })

    watch('src/**/*.*', () => {
        reload();
    })
})