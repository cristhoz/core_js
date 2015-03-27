module.exports = function(grunt) {
	var config = grunt.file.readJSON('config.json');

	var _initConfig = function() {
		var _initObject = {};

		var _setConcat = function() {
			_initObject.concat = {
				extend: {
					options: {
						banner: '(function(Core) {\r\'use strict\';',
						separator: '\r',
						footer: '})(Core);'
					},
					src: [ 'src/' + config.version + '/extend/**/*.js' ],
					dest: 'src/' + config.version + '/core.extend.js'
				}
			};
		};

		var _setUglify = function() {
			if(!config.uglify.prod && !config.uglify.dev) {
				return;
			}

			_initObject.uglify = {};

			if(config.uglify.prod) {
				_initObject.uglify.extend_prod = {
					options: { sourceMap: false },
					src: 'src/' + config.version + '/core.extend.js',
					dest: 'dist/prod/' + config.version + '/core.extend-min.js'
				};

				_initObject.uglify.core_prod = {
					options: { sourceMap: false },
					src: 'src/' + config.version + '/core.js',
					dest: 'dist/prod/' + config.version + '/core-min.js'
				};
			}

			if(config.uglify.dev) {
				_initObject.uglify.extend_dev = {
					options: config.uglify.options.dev,
					src: 'src/' + config.version + '/core.extend.js',
					dest: 'dist/dev/' + config.version + '/core.extend.js'
				};

				_initObject.uglify.core_dev = {
					options: config.uglify.options.dev,
					src: 'src/' + config.version + '/core.js',
					dest: 'dist/dev/' + config.version + '/core.js'
				};
			}
		};

		var _setWatch = function() {
			if(!config.watch) {
				return;
			}

			_initObject.watch = {
				scripts: {
					files: 'src/**/*.js',
					tasks: config.task
				}
			};
		};

		(function _init() {
			_setConcat();
			_setUglify();
			_setWatch();

			grunt.initConfig(_initObject);
		})();
	};

	var _loadTasks = function() {
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
	};

	(function _init() {
		_initConfig();
		_loadTasks();

		grunt.registerTask('default', config.watch ? ['watch'] : config.task);
	})();
};