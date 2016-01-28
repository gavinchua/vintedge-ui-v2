module.exports = {
	options: {
		css: [
			'assets/css/dist/style.min.css'
		],
		dimensions: [{
			width: 320,
			height: 480
		},
		{
			width: 1280,
			height: 800
		}]
	},
	files: {
		//src: 'index.html',
		//dest: 'index-critical.html'
		expand: true,
		cwd: '',
		src: ['*.html'],	// src
		dest: '.'	// dist
	}
}