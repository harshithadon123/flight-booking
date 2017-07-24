const gulp = require('gulp');
const ts = require('gulp-typescript');
const HTML_FILES = ['src/*.html', 'src/**/*.html'];
const CSS_FILES = ['src/*.css', 'src/**/*.css'];
const SYSTEMJS_FILES = ['src/systemjs.config.js', 'src/systemjs.config.extras.js', , 'src/systemjs-angular-loader.js'];

// pull in the project TypeScript config
const tsProject = ts.createProject('./src/tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('html', function() {
    return gulp.src(HTML_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src(CSS_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('systemjs', function() {
    return gulp.src(SYSTEMJS_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('assets', ['html', 'css', 'systemjs']);

gulp.task('default', ['watch', 'assets']);