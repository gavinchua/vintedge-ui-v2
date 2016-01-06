module.exports = {
	combine: {
		files: {
			'assets/css/dist/style.min.css': ['assets/css/dist/bootstrap/bootstrap.min.css', 'assets/css/src/plugins/*.css', 'assets/css/dist/style.css']
		}
	}
}