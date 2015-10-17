import gulp from 'gulp';
import gls from 'gulp-live-server';

gulp.task('serve', () => {
  let server = gls.new('./bin/www', {
    DEBUG: 'tropos-react'
  });

  server.start();

  gulp.watch(['./views/**/*.jsx'], (file) => {
    server.notify.apply(server, [file]);
  });

  gulp.watch('app.js', server.start.bind(server));
});
