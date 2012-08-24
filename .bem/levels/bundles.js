var PATH = require('path'),
    extend = require('bem/lib/util').extend,

    BEM_TECHS = PATH.resolve(__dirname,
            '../../bem-bl/blocks-common/i-bem/bem/techs');

exports.getTechs = function() {

    return {
        'bemjson.js': '',
        'bemdecl.js': 'bemdecl.js',
        'deps.js': 'deps.js',
        'js': 'js-i',
        'css': 'css',
        'bemhtml.js': PATH.join(BEM_TECHS, 'bemhtml.js'),
        'html': PATH.join(BEM_TECHS, 'html')
    };

};

// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

// Various level configuration
exports.getConfig = function() {

    return extend({}, this.__base() || {}, {

        bundleBuildLevels: this.resolvePaths([
                '../../bem-bl/blocks-common',
                '../../common',
                '../../todoapp',
            ].map(function(path) {
                return PATH.resolve(__dirname, path);
            }))

    });

};

