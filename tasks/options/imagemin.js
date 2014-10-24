module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'assets/img/src',
			src: ['**/*.{png,jpg,gif,svg}'],	// src
			dest: 'assets/img/dist'	// dist
		}]
	}
}