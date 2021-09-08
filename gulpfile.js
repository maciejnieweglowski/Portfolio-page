var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
// let cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss') //zabierz pliki z:
    .pipe(sass()) //przekaż pliki do paczki sass - preprocesorowanie
    // .pipe(cssbeautify())
    .pipe(gulp.dest('app/css')); // zwróć pliki do paczki app/css

});

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp. series('sass'));

});