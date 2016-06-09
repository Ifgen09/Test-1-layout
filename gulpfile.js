var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var newer = require('gulp-newer');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var  port = 3000;



var path = {
	build: {
		html: 'page/build/',
		js: 'page/build/js/',
		css: 'page/build/css/',
		img: 'page/build/img/'
	},
	src: {
		html: 'page/src/**/*.html',
		js: 'page/src**/js/*.js',
		style: 'page/src/stylus/main.styl'
	},
	watch: {
		html: 'page/src/**/*.html',
		js: 'page/src/**/js/*.js',
		style: 'page/src/**/stylus/*.styl'
	},
	clean: 'page/build'
};


gulp.task('scripts:build', function() {
	'use strict';

	return gulp.src([
		'page/src/js/libs/jquery.min.js',
		path.src.js
	])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(path.build.js))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.on('error',notify.onError())
		.pipe(gulp.dest(path.build.js))
		.pipe(browserSync.reload({
			stream: true
		}));
});





gulp.task('style:build', function() {
	'use strict';
	gulp.src(path.src.style)
		.pipe(stylus())
		.on('error',notify.onError())
		.pipe(gulp.dest(path.build.css))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCss())

		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.reload({
			stream: true
		}));
});


gulp.task('html:build', function() {
	'use strict';
	return gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html))
});

gulp.task('watch:build', function() {
	gulp.watch(path.watch.html, ['html:build']);
	gulp.watch(path.watch.style, ['style:build']);
	gulp.watch(path.watch.js, ['scripts:build']);
	//gulp.watch('*.html').on('change', browserSync.reload);
	//gulp.watch("*.html", htmlInjector);
});





gulp.task('server', function() {
	browserSync({
		server: {
			baseDir: 'page/build'
		},
		files: "page/build/**",
		logFileChanges: true,
		logLevel: "debug"
	});

	// gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});


//gulp.task('default', ['server','watch:build']);
gulp.task('default', ['scripts:build','style:build', 'html:build', 'server','watch:build']);

