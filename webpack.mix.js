const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('assets').options({
    processCssUrls: false,
    clearConsole: true,
    uglify: {
        uglifyOptions:{
            mangle: true,
            compress: {
                warnings: false,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                collapse_vars: false,
                reduce_vars: false,
            },
            output: {
                comments: false
            }
        }
    }
})
    .js('dev-assets/js/app.js', 'assets/js')
    .sourceMaps()
    .sass('dev-assets/sass/app.scss', 'assets/css', {
        outputStyle: 'compressed'
    })
    .copy('dev-assets/fonts', 'assets/fonts')
    .copy('dev-assets/images', 'assets/images')
    .version();