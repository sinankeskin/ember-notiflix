'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    // Notiflix CSS + JS
    ['css', 'js'].forEach((ext) => {
      app.import(`node_modules/notiflix/src/notiflix.${ext}`);
    });
  },
};
