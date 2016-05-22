var gulp=require('gulp')
var jade=require('gulp-jade')

gulp.task('default',function(){
	gulp.src('public/body.jade')
	.pipe(jade())
	.pipe(gulp.dest('Html/'))
})