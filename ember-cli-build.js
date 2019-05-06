'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  // Notiflix 1.5.0
  app.import('node_modules/notiflix/dist/notiflix-1.5.0.min.css');
  app.import('node_modules/notiflix/dist/notiflix-1.5.0.min.js');

  return app.toTree();
};
