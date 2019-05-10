const path = require('path');

const shortOutPath = 'dist/web'

var conf = {
	com: {
		shortOutPath: shortOutPath,
		// cdn: false,

		outPath: path.resolve(__dirname, "../" + shortOutPath),
		assetsOutDir : "static/",

		page: {
			app: "index.html",
		},
		entry: {
			polyfill: 'babel-polyfill',
			app: "./src/MainHome.ts",
		},
	},
	build: {
		
	},
	dev: {
		host: '0.0.0.0',
		port: 8081,

	},
}

module.exports = conf
