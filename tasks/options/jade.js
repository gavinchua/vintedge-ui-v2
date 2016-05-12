module.exports = {
	options: {
		//data: require('./data/data.json'),
		basedir: 'assets/jade/src',
		pretty: true
	},
	files: {
		expand: true,
		cwd: 'assets/jade/src/pages',
		src: ['**/*.jade'],	// src
		dest: 'assets/html',	// dist
		ext: '.html'
	}
}