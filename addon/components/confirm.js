/** @documenter yuidoc */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * Confirm component
 *
 * @class Confirm
 * @public
 */
export default Component.extend({
  notiflix: service(),
  title: '',
  message: '',
  okBtnText: '',
  cancelBtnText: '',
  okClick() {},
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
