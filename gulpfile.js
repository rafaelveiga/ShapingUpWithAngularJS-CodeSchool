var gulp = require('gulp'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	htmlreplace = require('gulp-html-replace');


// =========================
// Server
// =========================
gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('./src/*.html')
	  .pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('server', ['connect', 'watch']);

// =========================
// Build
// =========================
gulp.task('build-js', function() {
	gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./build/js/'));

	gulp.src('./src/js/products.json')
		.pipe(gulp.dest('./build/js'));
});

gulp.task('build-css', function() {
	gulp.src('./src/css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('./build/css/'));
});

gulp.task('build-vendor', function() {
	vendorScripts = [
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/angular/angular.min.js',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js'
	];

	gulp.src(vendorScripts)
		.pipe(gulp.dest('./build/vendor/'));
})

gulp.task('build-html', function() {
	gulp.src('./src/index.html')
		.pipe(htmlreplace({
			angularjs: 'vendor/angular.min.js',
			bstrapcss: 'vendor/bootstrap.min.css',
			bstrapjs:  'vendor/bootstrap.min.js',
			jquery:    'vendor/jquery.min.js',
			mainjs:    'js/all.js'
		}))
		
		.pipe(gulp.dest('./build'));

	gulp.src(['./src/product-panels.html', './src/product-title.html'])
		.pipe(gulp.dest('./build'));
});

gulp.task('build', ['build-js', 'build-css', 'build-vendor', 'build-html']);