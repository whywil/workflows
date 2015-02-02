var gulp = require('gulp'),
	gutil = require('gulp-util')
	coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
	gulp.src('components/coffee/tagline.coffee')
	.pipe(coffee({ bare: true })
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});