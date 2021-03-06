/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';
import mocha from 'gulp-mocha';
import flow from 'gulp-flowtype';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';

import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js',
  allLibTests: 'lib/test/**/*.js',
  serverSrcJs: 'src/server/**/*.js',
  sharedSrcJs: 'src/shared/**/*.js',
  clientEntryPoint: 'src/client/app.js',
  electron: 'src/client/electron.js',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  clientBundle: 'dist/client-bundle.js?(.map)',
  pug: 'src/pug/**/*.pug',
  html: 'dist',
  sass: 'src/sass/**/*.sass',
  css: 'dist/css/',
  libDir: 'lib',
  js: 'dist/js',
};
const plumberOption = {
  errorHandler(error) {
    console.log(error.message);
    this.emit('end');
  },
};

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

gulp.task('build', ['lint', 'clean', 'pug', 'sass'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(plumber(plumberOption))
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('main', ['test', 'electron'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.js)),
);

gulp.task('electron', () =>
  gulp.src(paths.electron)
    .pipe(babel())
    .pipe(gulp.dest(paths.js)),
);

gulp.task('pug', () =>
  gulp.src(paths.pug)
    .pipe(plumber(plumberOption))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.html)),
);

gulp.task('sass', () => {
  const processors = [
    cssnext(),
  ];
  gulp.src(paths.sass)
    .pipe(plumber(plumberOption))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', () => {
  const watchList = [
    paths.allSrcJs,
    paths.sass,
    paths.pug,
  ];
  gulp.watch(watchList, ['main']);
});

gulp.task('default', ['watch', 'main']);

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(plumber(plumberOption))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(flow({ abort: true })),
);

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);
