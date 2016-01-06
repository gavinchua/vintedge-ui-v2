module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['assets/js/src/plugins/*.js', 'assets/js/src/script.js'],
		tasks: ['jshint', 'concat', 'uglify', 'usebanner'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['assets/css/src/plugins/*.css', 'assets/css/src/structure/style.styl', 'assets/css/src/structure/*/*.styl'],
		tasks: ['stylus', 'cssmin', 'usebanner'],
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
		files: ['*.html','*.php','*.asp'],
		options: {
			spawn: false,
		}
	},
	jade: {
		files: ['assets/jade/src/includes/*/*.jade', 'assets/jade/src/includes/*.jade', 'assets/jade/src/pages/*/*.jade', 'assets/jade/src/pages/*.jade', 'assets/jade/src/data/*.json'],
		tasks: ['jade'],
		options: {
			spawn: false,
		}
	}
}