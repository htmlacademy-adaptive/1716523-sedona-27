import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import imagemin from 'gulp-imagemin';
import csso from 'postcss-csso';
import webp from 'gulp-webp';

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(postcss([
      csso()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(browser.stream());
}

//optimaze images

export const images = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'))
}

export const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("build/img"))
}

//copy svg sprite

export const sprite = () => {
  return gulp.src("source/img/sprite.svg")
  .pipe(gulp.dest("build/img"))
}

//copy files

export const copy = () => {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'))
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, server, watcher
);
