module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'assets/img/src',
			src: ['**/*.{png,jpg,gif}'],	// src
			dest: 'assets/img/dist'	// dist
		}]
	}
}