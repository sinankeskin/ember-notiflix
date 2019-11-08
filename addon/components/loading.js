import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * Loading component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Loading @type="standard" @message="Loading..." />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.loading(type, message);
 * ```
 * @class Loading
 * @public
 */
export default Component.extend({
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type ember/service
   */
  notiflix: service(),
  /**
   * Type of loading screen
   *
   * Values: standard | hourglass | circle | arrows | dots | pulse
   *
   * Default: standard
   *
   * @argument type
   * @type string
   */
  type: 'standard',
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  message: '',

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    this._displayLoading();
  },

  _displayLoading() {
    this.notiflix.loading(this.type, this.message);
  },

  /**
   * To change message on screen
   *
   * @method change
   * @param {string} message
   */
  change(message) {
    this.notiflix.Loading.Change(message);
  },

  /**
   * To remove screen after delay time (milliseconds)
   *
   * @method remove
   * @param {number} delay
   */
  remove(delay) {
    this.notiflix.Loading.Remove(delay);
  }
});
