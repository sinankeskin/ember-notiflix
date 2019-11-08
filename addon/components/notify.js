import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * Notify component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Notify @type="success" @message="Success" @onClick={{action "showAlert" "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.notify(type, message, callback);
 * ```
 * @class Notify
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
   * Type of notify
   *
   * Values: success | failure | warning | info
   *
   * Default: success
   *
   * @argument type
   * @type string
   */
  type: 'success',
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  message: '',
  /**
   * onClick callback
   *
   * @argument onClick
   * @type function
   */
  onClick() {},

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    this._displayNotify();
  },

  _displayNotify() {
    this.notiflix.notify(this.type, this.message, this.onClick);
  }
});
