module.exports = {
	dist: {
		options: {
			compress: false
		},
		files: {
			'assets/css/dist/style.css': [	// dist
				'assets/css/src/style.styl',	// src
				'assets/css/src/structure/*/*.styl'	// src
			]
		}
	}
}