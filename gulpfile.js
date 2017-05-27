var gulp = require('gulp');

var minihtml = require('gulp-minify-html');

var minicss = require('gulp-clean-css');

var minijs = require('gulp-uglify');

gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minihtml())
	.pipe(gulp.dest('dist'))
});

gulp.task('csstask',function(){
	gulp.src('css/*.css')
	.pipe(minicss())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('jstask',function(){
	gulp.src('js/*.js')
	.pipe(minijs())
	.pipe(gulp.dest('dist/js'))
});
