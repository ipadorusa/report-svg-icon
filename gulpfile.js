const util = require('util'),
			gulp = require('gulp'),
			plumber = require('gulp-plumber'),
			svgSprite = require('gulp-svg-sprite');
			

const config = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 50,
            maxHeight: 50
        },
        spacing: { // Add padding
            padding: 10
        },
        dest: 'out/intermediate-svg' // Keep the intermediate files
    },
    mode: {
        view: { // Activate the «view» mode
            bust: false,
            render: {
                css: true,
                scss: true // Activate Sass output (with default options)
            }
        },
        symbol: true,
        example: true
    },
    
}

gulp.task('svg', function () {
    return gulp.src(`${__dirname}/svg/*.svg`)
        .pipe(svgSprite(config))
        .on('error', function(error) {
            util.log('error')
        })
        .pipe(gulp.dest('output'));
});