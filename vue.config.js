const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
      loaderOptions: {
          sass: {
            additionalData: `
                  @import "@/assets/scss/variables.scss";
              `
          }
      },
      extract: {
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css'
      }
  },
  configureWebpack:{
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
				},
			},
		},
		output: {
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].js',
			path: path.resolve(__dirname, 'dist'),
		},
	},
  
	pwa: {
		name: 'Telegram Simple',
		themeColor: '#0088CC',
		msTileColor: '#FFFFFF',
		manifestOptions: {
			background_color: '#FFFFFF'
		}
	}
})