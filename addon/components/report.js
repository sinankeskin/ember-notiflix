import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service(),
  type: 'success',
  title: '',
  message: '',
  btnText: 'OK',
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
