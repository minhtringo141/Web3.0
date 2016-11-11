var gulp = require("gulp");
var nodemon = require("nodemon"); // gulp task to start server
var browserSync = require("browser-sync"); // use for multi-device testing
var inject = require('gulp-inject'); // inject file into index.html
var mainBowerFiles = require('main-bower-files'); // bower and inject

gulp.task("server", ["runserver"], function() {
    browserSync.init({
        proxy: "http://localhost:7000/",
        file: ["/public/**/*.*"],
        browser: "google chrome",
        port: 9000
    });
});


gulp.task("runserver", function(cb) {
    return nodemon({
        script: 'app.js'
    }).on('start', function() {
        cb();
    });
});

gulp.task('inject', function() {
    return gulp.src(['./public/index.html'])
        .pipe(inject(gulp.src(['./public/js/*.js', './public/css/*.css'])))
        .pipe(gulp.dest("./public/"));
});

gulp.task('bower-files', function() {
    return gulp.src('./public/index.html')
	  .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower'}))
	  // .pipe(inject(es.merge(
	  //   cssFiles,
	  //   gulp.src('./src/app/**/*.js', {read: false})
	  // )))
	  .pipe(gulp.dest('./dist'));
});
