<<<<<<< HEAD
const { src, dest, watch , parallel } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
=======
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const terser = require('gulp-terser-js');
const squoosh = require('gulp-libsquoosh');
>>>>>>> 8170597 (First commit)
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
<<<<<<< HEAD
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
=======
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
	img: 'src/img/**/*'
>>>>>>> 8170597 (First commit)
}

// css es una función que se puede llamar automaticamente
function css() {
<<<<<<< HEAD
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/css') );
=======
	return src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('public/build/css'));
>>>>>>> 8170597 (First commit)
}


function javascript() {
<<<<<<< HEAD
    return src(paths.js)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js')) // final output file name
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./build/js'))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}


function watchArchivos() {
    watch( paths.scss, css );
    watch( paths.js, javascript );
    watch( paths.imagenes, imagenes );
    watch( paths.imagenes, versionWebp );
}
  
exports.default = parallel(css, javascript,  imagenes, versionWebp, watchArchivos ); 
=======
	return src(paths.js)
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('public/build/js'));
}

function img() {
	return src(paths.img)
		.pipe(cache(squoosh()))
		.pipe(webp())
		.pipe(dest('public/build/img'))
		.pipe(notify({ message: 'Imagen Completada' }));
}

function watchArchives() {
	watch(paths.scss, css);
	watch(paths.js, javascript);
	watch(paths.img, img);
}

exports.css = css;
exports.watch = watchArchives;
exports.default = parallel(css, javascript, img, watchArchives); 
>>>>>>> 8170597 (First commit)
