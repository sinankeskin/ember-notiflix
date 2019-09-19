'use strict';

var paket = require('./package');

module.exports = {
  name: paket.name,

  included(app) {
    this._super.included.apply(this, arguments);

    // Notiflix CSS + JS
    ['css', 'js'].forEach(ext => {
      app.import(
        `node_modules/notiflix/dist/Unminified/notiflix-${paket.dependencies.notiflix}.${ext}`
      );
    });
  }
};
