import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * Report component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Report @type="success" @title="Success" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.report(type, title, message, btnText, callback);
 * ```
 * @class Report
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
   * Type of report
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
   * Title of the report
   *
   * @argument title
   * @type string
   */
  title: '',
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  message: '',
  /**
   * Button text to close report
   *
   * Default: OK
   *
   * @argument btnText
   * @type string
   */
  btnText: 'OK',
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

    this._displayReport();
  },

  _displayReport() {
    this.notiflix.report(
      this.type,
      this.title,
      this.message,
      this.btnText,
      this.onClick
    );
  }
});
