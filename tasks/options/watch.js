module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['assets/js/src/plugins/*.js', 'assets/js/src/script.js'],
		tasks: ['jshint', 'concat', 'uglify'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['assets/css/src/structure/style.styl', 'assets/css/src/plugins/*.css', 'assets/css/src/structure/*/*.styl'],
		tasks: ['stylus', 'cssmin'],
		options: {
			spawn: false,
		}
	},
	images: {
		files: ['assets/img/src/*.{png,jpg,gif,svg}', 'assets/img/src/*/*.{png,jpg,gif,svg}'],
		tasks: ['imagemin'],
		options: {
			spawn: false,
		}
	},
	html: {
		files: ['*.html','*.php'],
		options: {
			spawn: false,
		}
	}
}