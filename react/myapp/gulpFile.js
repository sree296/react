var gulp = require('gulp');
var sass = require('gulp-sass');

/*gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});*/

gulp.task('sass', function(){
    return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);