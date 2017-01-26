var gulp =  require('gulp');
gulp.task('hello',function(){
	console.log("hello gulp");
});
var sass = require('gulp-sass');
gulp.task("sass",function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});