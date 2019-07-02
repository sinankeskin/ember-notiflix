'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    // Notiflix 1.7.0 CSS + JS
    app.import('node_modules/notiflix/dist/notiflix-1.7.1.min.css');
    app.import('node_modules/notiflix/dist/notiflix-1.7.1.min.js');
  }
};
