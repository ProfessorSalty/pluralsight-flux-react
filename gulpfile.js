const gulp = require('gulp'),
      connect = require('gulp-connect'), //opens dev server
      open = require('gulp-open'), //opens the web browser
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream'), //Use conventional text streams with Gulp
      concat = require('gulp-concat'),
      lint = require('gulp-eslint'),
      sourcemaps = require('gulp-sourcemaps');

const config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css'
        ],
        dist: './dist',
        images: './src/images/**',
        mainJs: './src/main.js'
    }
};

gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.devBaseUrl + ':' + config.port + '/'
        }))
});

gulp.task('images', () => {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    browserify(config.paths.mainJs, {debug: true})
        .transform(babelify,{
            presets: ["es2015", "react"], 
            plugins: ["syntax-class-properties", "transform-class-properties"], 
            sourceMaps: true
        })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
                .pipe(lint({config: 'eslint.config.json'}))
                .pipe(lint.format());
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'images', 'open', 'watch']);