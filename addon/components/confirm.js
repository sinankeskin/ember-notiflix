/** @documenter yuidoc */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * Confirm component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Confirm @title="Notiflix Confirm" @message="Do you agree with me?" @okBtnText="Yes" @cancelBtnText="No" @onClick={{action "showAlert" "Message"}} @cancelClick={{action "showAlert" "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.confirm(title, message, okBtnText, cancelBtnText, okClick, cancelClick);
 * ```
 * @class Confirm
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
   * Title of the confirm
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
   * OK button text
   *
   * @argument okBtnText
   * @type string
   */
  okBtnText: '',
  /**
   * Cancel button text
   *
   * @argument cancelBtnText
   * @type string
   */
  cancelBtnText: '',
  /**
   * OK click callback
   *
   * @argument okClick
   * @type function
   */
  okClick() {},
  /**
   * Cancel click callback
   *
   * @argument cancelClick
   * @type function
   */
  cancelClick() {},

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    this._displayConfirm();
  },

  _displayConfirm() {
    this.notiflix.confirm(
      this.title,
      this.message,
      this.okBtnText,
      this.cancelBtnText,
      this.okClick,
      this.cancelClick
    );
  }
});
