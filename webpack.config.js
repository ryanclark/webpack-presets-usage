// This won't be needed as webpack will do all of this (search for presets and merge)

const merge = require('webpack-merge');

const sass = require('@webpack/sass'); // you'll need to npm link the presets from the main repo
const html = require('@webpack/html');
const less = require('@webpack/less');
const typescript = require('@webpack/typescript');

const mode = 'development';

module.exports = merge(sass(mode), html(mode), less(mode), typescript(mode), { mode });
