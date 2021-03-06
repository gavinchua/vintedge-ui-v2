module.exports = {
	css: {
		options: {
			banner: '/*!\n' +
				' * CSS\n' +
				' * <%= pkg.name %> - v<%= pkg.version %>\n' +
				' * Last updated: <%= grunt.template.today("dd-mm-yyyy") %>\n' +
				' * by <%= pkg.author %> - <%= pkg.homepage %>\n' +
				' * Compiled using Grunt' +
				//' * Licensed under MIT (<%= _.pluck(pkg.licenses, "url").join(", ") %>)\n' +
				' */\n\n'
		},
		files: {
			src: ['assets/css/dist/style.min.css']
		}
	},
	js: {
		options: {
			banner: '/*!\n' +
				' * JS\n' +
				' * <%= pkg.name %> - v<%= pkg.version %>\n' +
				' * Last updated: <%= grunt.template.today("dd-mm-yyyy") %>\n' +
				' * by <%= pkg.author %> - <%= pkg.homepage %>\n' +
				' * Compiled using Grunt' +
				//' * Licensed under MIT (<%= _.pluck(pkg.licenses, "url").join(", ") %>)\n' +
				' */\n\n'
		},
		files: {
			src: ['assets/js/dist/script.min.js']
		}
	}
}