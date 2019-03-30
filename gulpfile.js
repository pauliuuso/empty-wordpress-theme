var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var themeName = 'empty-wordpress-theme';
var baseUrl = './wp-content/themes/' + themeName;

gulp.task('imagemin', function () {
    return gulp.src(baseUrl + '/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(baseUrl + '/img'));
});

gulp.task('sass', function () {
  gulp.src(baseUrl + '/assets/sass/style.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(baseUrl));
});

gulp.task('uglify', function() {
  gulp.src(baseUrl + '/assets/js/**/*.js')
    .pipe(uglify('app.min.js'))
    .pipe(gulp.dest(baseUrl + '/js'))
});

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch(baseUrl + './assets/sass/style.scss', ['sass']);
    gulp.watch(baseUrl + '/assets/js/**/*.js', ['uglify']);
    gulp.watch([baseUrl + '/style.css', baseUrl + '/*.php', baseUrl +  '/js/app.js', baseUrl + '/parts/**/*.php'], function (files){
        livereload.changed(files)
    });
});