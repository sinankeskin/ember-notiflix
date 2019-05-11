'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    // Notiflix 1.5.0 AIO
    app.import('node_modules/notiflix/dist/notiflix-aio-1.5.0.min.js');
  }
};
