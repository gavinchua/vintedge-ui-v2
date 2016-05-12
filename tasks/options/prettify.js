module.exports = {
	options: {
		indent: 1,
		indent_char: '	'
	},
	files: {
		expand: true,
		cwd: 'assets/html',
		src: ['**/*.html'],	// src
		dest: './',	// dist
		ext: '.html'
	}
}