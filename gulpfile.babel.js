import gulp from 'gulp';
import gls from 'gulp-live-server';
import sass from 'gulp-sass';
import newer from 'gulp-newer';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('build:font', () => {
  return gulp.src(['assets/fonts/**/*', 'bower_components/weather-icons/font/*'])
    .pipe(newer('build/fonts'))
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('watch:font', function () {
  gulp.watch('./assets/fonts/*.otf', ['build:font']);
});

gulp.task('build:style', () => {
  gulp.src('assets/styles/**/*.scss')
      .pipe(sass({
        includePaths: [
          'bower_components/bourbon/app/assets/stylesheets/',
          'bower_components/weather-icons/sass'
        ]
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch:style', function () {
  gulp.watch('./assets/styles/main.scss', ['build:style']);
});

gulp.task('serve', () => {
  let server = gls.new('./bin/www', {
    DEBUG: 'tropos-react'
  });

  server.start();

  gulp.watch(['./build/styles/*.css'], (file) => {
    server.notify.apply(server, [file]);
  });

  gulp.watch(['./views/**/*.jsx'], (file) => {
    server.notify.apply(server, [file]);
  });

  gulp.watch(['app.js', 'routes/*.js'], () => {
    server.start.bind(server)();
  });
});

gulp.task('watch', ['watch:style', 'watch:font']);

gulp.task('build', ['build:style', 'build:font']);

gulp.task('default', ['build', 'serve', 'watch']);
