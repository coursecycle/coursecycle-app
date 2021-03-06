var del = require('del');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rs = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('build', function() {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new plugins.util.PluginError("webpack", err);
    plugins.util.log("[webpack]", "Emitted output file successfully");
  });
});

gulp.task('clean', function() {
  return del('./build/**/*');
});

gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
  rs(
    'clean',
    'copy',
    ['build', 'less'],
    'serve',
    'watch'
  );
});

gulp.task('deploy', function() {
  rs(
    'clean',
    'copy',
    ['build', 'less']
  );
});

gulp.task('less', function() {
  gulp.src('./styles/**/*.less')
    .pipe(plugins.less())
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('serve', function() {
  plugins.connect.server({
    root: 'build'
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts*', ['build']);
  gulp.watch('./src/index.html', ['copy']);
  gulp.watch('./styles/**/*.less', ['less']);
});
