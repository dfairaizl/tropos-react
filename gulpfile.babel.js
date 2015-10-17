import gulp from 'gulp';
import gls from 'gulp-live-server';
import sass from 'gulp-sass';

gulp.task('build:style', () => {
  gulp.src('assets/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', ['sass:watch']);

gulp.task('build', ['build:style']);

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
    console.log('restarting server');
    server.start.bind(server)();
  });
});

gulp.task('default', ['serve', 'watch']);
