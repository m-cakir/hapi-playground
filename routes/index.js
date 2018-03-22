const path  = require('path');
const fs    = require('fs');
const _     = require('lodash');

fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.js') return;

    var mod = {};

    mod[path.basename(file, '.js')] = require(path.join(__dirname, file));

    _.extend(module.exports, mod);
});