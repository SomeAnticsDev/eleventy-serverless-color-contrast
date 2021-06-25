const {EleventyServerlessBundlerPlugin} = require("@11ty/eleventy");
const colorContrast = require('color-contrast');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: 'ondemand',
		functionsDir: './netlify/functions',
		inputDir: './src'
	});

	eleventyConfig.addFilter(
		'colorContrast',
		(a = '#000000', b = '#ffffff') => {
			console.log('possum', a, b)
			return colorContrast(a, b);
		});

	return {
		dir: {
			input: './src'
		}
	}
}