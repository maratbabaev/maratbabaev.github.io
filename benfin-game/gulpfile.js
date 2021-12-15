const gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins(),
  del = require('del'),
  path = require('path'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  imageminPngquant = require('imagemin-pngquant')

const pluginSrc = {
  js: [
    'public/js/*.js',
    '!public/js/*.min.js',
    '!public/js/vendor/**/*.js',
  ],
  css: [
    'public/css/*.less',
    '!public/css/vendor/**/*.less',
  ],
  cssMaps: [
    'public/css/maps/*',
  ],
  images: [
    'public/images/**/*.svg',
    'public/images/**/*.png',
    'public/images/**/*.jpeg',
    'public/images/**/*.jpg',
  ],
  lang: {
    src: [
      '**/*.php',
      '!vendor/**/*.php',
    ],
    dest: './languages/',
  },
}

gulp.task('images', function () {
  return gulp.src(pluginSrc.images).
    pipe(plugins.plumber()).
    pipe(plugins.imagemin([
      plugins.imagemin.gifsicle({ interlaced: true }),
      imageminJpegRecompress({
        progressive: true,
        max: 80,
        min: 70,
      }),
      imageminPngquant({
        quality: [0.5, 0.8],
      }),
      plugins.imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
    ])).
    pipe(plugins.notify({ message: 'Изображения оптимизированы' }))
})

gulp.task('clean', function (cb) {
  del(pluginSrc.cssMaps, cb)
})

let css = function (path) {

  return gulp.src(path).
    pipe(plugins.sourcemaps.init({ loadMaps: true })).
    pipe(plugins.plumber()).
    pipe(plugins.less()).
    pipe(plugins.autoprefixer(['ios_saf >= 6', 'last 3 versions'])).
    pipe(plugins.concat('style.css')).
    pipe(plugins.csso()).
    pipe(plugins.sourcemaps.write()).
    pipe(plugins.notify({ message: 'Стили плагина собрались' })).
    pipe(gulp.dest('public/css'))
}

gulp.task('css', function (done) {
  css(pluginSrc.css)
  done()
})

gulp.task('watch', function () {

  gulp.watch(pluginSrc.css).on('change', function (file) {
    css(pluginSrc.css)
  })
})
